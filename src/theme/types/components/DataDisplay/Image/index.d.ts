export interface IKitImageTheme {
    colors: {
        border: {
            /**
             * check color
             * @TJS-type color
             */
            none: string;
            /**
             * check color
             * @TJS-type color
             */
            default: string;
        };
    };
    border: {
        radius: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            default: number;
            /**
             * @minimum 0
             * @TJS-type number
             */
            rounded: number;
        };
    };
}

export interface IKitImageCssTokens {
    colors: {
        border: {
            none: string;
            default: string;
        };
    };
    border: {
        radius: {
            default: string;
            rounded: string;
        };
    };
}
