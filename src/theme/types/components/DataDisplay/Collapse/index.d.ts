export interface IKitCollapseTheme {
    colors: {
        background: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
            /**
             * active color
             * @TJS-type color
             */
            active: string;
        };
        border: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
            /**
             * active color
             * @TJS-type color
             */
            active: string;
        };
    };
    border: {
        /**
         * @minimum 0
         * @TJS-type number
         */
        radius: number;
    };
}

export interface IKitCollapseCssTokens {
    colors: {
        background: {
            default: string;
            active: string;
        };
        border: {
            default: string;
            active: string;
        };
    };
    border: {
        radius: string;
    };
}
