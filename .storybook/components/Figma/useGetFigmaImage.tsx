import {useState} from 'react';

type Remote<T, E = Error> =
    | {
          state: 'fetched';
          value: T;
      }
    | {
          state: 'failed';
          error: E;
      }
    | {
          state: 'loading';
      };

type ApiResponse = {
    images: {
        [id: string]: string;
    };
};

let FIGMA_ACCESS_TOKEN: string | null = process.env.FIGMA_ACCESS_TOKEN ?? null;

export const figmaURLPattern = /https:\/\/([w.-]+.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/;

function unwrapJson<T>(res: Response): Promise<T> {
    return res.status !== 200 ? Promise.reject(res.statusText) : (res.json() as Promise<T>);
}

const useGetFigmaImage = ({src}) => {
    const [state, setStatus] = useState<Remote<string, string>>({
        state: 'loading'
    });

    const fetchDetails = async (signal: AbortSignal) => {
        setStatus({state: 'loading'});

        const match = src.match(figmaURLPattern);

        if (!match) {
            setStatus({state: 'failed', error: 'no node id in url'});
        }

        const [, , , fileKey] = match;

        const url = new URL(src);
        const nodeId = url.searchParams.get('node-id')?.replace('-', ':');
        console.log('nodeId', nodeId);

        if (!nodeId) {
            setStatus({state: 'failed', error: 'no node id in url'});
            return;
        }

        const headers = {
            'X-FIGMA-TOKEN': FIGMA_ACCESS_TOKEN
        };

        const imageUrl = new URL(`https://api.figma.com/v1/images/${fileKey}`);
        imageUrl.searchParams.set('format', 'svg');
        imageUrl.searchParams.set('ids', nodeId);

        const images = await fetch(imageUrl.href, {
            // @ts-ignore
            headers,
            signal
        }).then(resp => unwrapJson<ApiResponse>(resp));

        setStatus({
            state: 'fetched',
            value: images.images[nodeId]
        });
    };

    useEffect(() => {
        let fulfilled = false;
        const fulfil = () => {
            fulfilled = true;
        };

        const ac = new AbortController();

        fetchDetails(ac.signal).then(fulfil, fulfil);

        return () => {
            if (!fulfilled) {
                ac.abort();
            }
        };
    }, [src]);

    // @ts-ignore
    return {status: state.state, src: state.value ?? null, error: state.error ?? ''};
};

const setAccessToken = key => (FIGMA_ACCESS_TOKEN = key);
export {setAccessToken};

export default useGetFigmaImage;
