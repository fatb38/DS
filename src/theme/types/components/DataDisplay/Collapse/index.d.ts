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
            /**
             * disabled color
             * @TJS-type color
             */
            disabled: string;
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
        icon: {
            /**
             * disabled color
             * @TJS-type color
             */
            disabled: string;
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
            disabled: string;
        };
        border: {
            default: string;
            active: string;
        };
        icon: {
            disabled: string;
        };
    };
    border: {
        radius: string;
    };
}
