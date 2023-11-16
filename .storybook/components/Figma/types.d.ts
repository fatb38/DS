export type Remote<T, E = Error> =
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

export type ApiResponse = {
    status: number;
    images: {
        [id: string]: string;
    };
};

export interface IFigmaImage {
    src: string;
    right?: boolean;
    left?: boolean;
    small?: boolean;
    good?: boolean;
    bad?: boolean;
    large?: boolean;
    inline?: boolean;
    description?: string;
    title?: string;
    setAccessToken: Function;
    _FIGMA_ACCESS_TOKEN: string | null;
}
