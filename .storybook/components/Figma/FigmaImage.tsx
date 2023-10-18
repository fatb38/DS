import React, {FunctionComponent, useEffect, useState} from 'react';
import ImagePreview from '../ImagePreview';
import classNames from 'classnames';
import {ApiResponse, IFigmaImage, Remote} from './types';

let FIGMA_ACCESS_TOKEN: string | null = 'figd_1f0sEnI6_Va8KgtcgrQCtDvkbZNgTbmQZGJVAGPX'; //process.env.FIGMA_ACCESS_TOKEN ?? null;

const figmaURLPattern = /https:\/\/([w.-]+.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/;

function unwrapJson<T>(res: Response): Promise<T> {
    return res.status !== 200 ? Promise.reject(res.statusText) : (res.json() as Promise<T>);
}

const FigmaImage: FunctionComponent<IFigmaImage> = ({src, ...props}) => {
    const [state, setStatus] = useState<Remote<string, string>>({
        state: 'loading'
    });

    const fetchDetails = async (signal: AbortSignal) => {
        setStatus({state: 'loading'});

        const match = src.match(figmaURLPattern);

        if (!match) {
            setStatus({state: 'failed', error: 'no node id in url'});
        }

        const [, , , fileKey] = match as Array<string>;

        const url = new URL(src);
        const nodeId = url.searchParams.get('node-id')?.replace('-', ':');

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

        if (!images.images[nodeId]) {
            setStatus({state: 'failed', error: 'No image to display'});
            return;
        }

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

    let imageProps = {
        right: props.right,
        left: props.left,
        small: props.small,
        large: props.large,
        inline: props.inline
    };

    let imageClassName = classNames('preview-img', 'no-padding', {
        good: props.good,
        bad: props.bad
    });

    switch (state.state) {
        case 'loading':
            return (
                <ImagePreview {...imageProps}>
                    <img
                        className={imageClassName}
                        src="https://dummyimage.com/squarepopup&text=loading..."
                        alt={props.title}
                        //@ts-ignore
                        description={props.description}
                    />
                </ImagePreview>
            );
        case 'failed':
            return (
                <ImagePreview {...imageProps}>
                    <img
                        className={imageClassName}
                        src={`https://dummyimage.com/squarepopup&text=${state.error}`}
                        alt={props.title}
                        //@ts-ignore
                        description={props.description}
                    />
                </ImagePreview>
            );
        case 'fetched':
            return (
                <ImagePreview {...imageProps}>
                    <img
                        className={imageClassName}
                        src={state.value}
                        alt={props.title}
                        //@ts-ignore
                        description={props.description}
                    />
                </ImagePreview>
            );
    }
};
//@ts-ignore
FigmaImage.setAccessToken = key => (FIGMA_ACCESS_TOKEN = key);

export default FigmaImage;
