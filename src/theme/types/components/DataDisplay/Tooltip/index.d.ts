export interface IKitTooltipTheme {
    colors: {
        background: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
        };
        typography: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
        };
    };
    border: {
        /**
         * @minimum 0
         * @TJS-type number
         */
        radius: number;
    };
    typography: {
        fontFamily: string;
        /**
         * @minimum 0
         * @TJS-type number
         */
        fontSize: number;
    };
}

export interface IKitTooltipCssTokens {
    colors: {
        background: {
            default: string;
        };
        typography: {
            default: string;
        };
    };
    border: {
        radius: string;
    };
    typography: {
        fontFamily: string;
        fontSize: string;
    };
}
