export interface IKitInputWrapperTheme {
    colors: {
        typography: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
            /**
             * default color
             * @TJS-type color
             */
            disabled: string;
            /**
             * default color
             * @TJS-type color
             */
            warning: string;
            /**
             * default color
             * @TJS-type color
             */
            error: string;
        };
        /**
         * default color
         * @TJS-type color
         */
        border: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
            /**
             * default color
             * @TJS-type color
             */
            disabled: string;
            /**
             * default color
             * @TJS-type color
             */
            error: string;
            /**
             * default color
             * @TJS-type color
             */
            warning: string;
        };
    };
    border: {
        /**
         * @minimum 0
         * @TJS-type number
         */
        radius: string;
    };
    gap: {
        /**
         * @minimum 0
         * @TJS-type number
         */
        label: number;
        /**
         * @minimum 0
         * @TJS-type number
         */
        helper: number;
    };
}

export interface IKitInputWrapperCssTokens {
    colors: {
        typography: {
            default: string;
            disabled: string;
            warning: string;
            error: string;
        };
        border: {
            default: string;
            disabled: string;
            error: string;
            warning: string;
        };
    };
    border: {
        radius: string;
    };
    gap: {
        label: string;
        helper: string;
    };
}
