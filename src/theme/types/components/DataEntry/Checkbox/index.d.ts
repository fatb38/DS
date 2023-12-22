export interface IKitCheckboxTheme {
    colors: {
        background: {
            /**
             * check color
             * @TJS-type color
             */
            check: string;
            /**
             * hover color
             * @TJS-type color
             */
            hover: string;
            /**
             * focus color
             * @TJS-type color
             */
            focus: string;
            /**
             * disabled color
             * @TJS-type color
             */
            disabled: string;
            danger: {
                /**
                 * default color
                 * @TJS-type color
                 */
                default: string;
                /**
                 * hover color
                 * @TJS-type color
                 */
                hover: string;
            };
        };
        border: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
            /**
             * check color
             * @TJS-type color
             */
            check: string;
            /**
             * hover color
             * @TJS-type color
             */
            hover: string;
            /**
             * focus color
             * @TJS-type color
             */
            focus: string;
            /**
             * disabled color
             * @TJS-type color
             */
            disabled: string;
            danger: {
                /**
                 * default color
                 * @TJS-type color
                 */
                default: string;
                /**
                 * hover color
                 * @TJS-type color
                 */
                hover: string;
                /**
                 * focus color
                 * @TJS-type color
                 */
                focus: string;
            };
        };
        typography: {
            /**
             * disabled color
             * @TJS-type color
             */
            disabled: string;
            danger: {
                /**
                 * disabled color
                 * @TJS-type color
                 */
                disabled: string;
            };
        };
    };
    typography: {
        /**
         * @minimum 0
         * @TJS-type number
         */
        fontWeight: string | number;
        fontFamily: string;
        /**
         * @minimum 0
         * @TJS-type number
         */
        fontSize: number;
        /**
         * @minimum 0
         * @TJS-type number
         */
        lineHeight: number;
        /**
         * @minimum 0
         * @TJS-type number
         */
        lineWidth: number;
    };
    border: {
        /**
         * @minimum 0
         * @TJS-type number
         */
        radius: number;
    };
}

export interface IKitCheckboxCssTokens {
    colors: {
        background: {
            check: string;
            hover: string;
            focus: string;
            disabled: string;
            danger: {
                default: string;
                hover: string;
            };
        };
        border: {
            default: string;
            check: string;
            hover: string;
            focus: string;
            disabled: string;
            danger: {
                default: string;
                hover: string;
                focus: string;
            };
        };
        typography: {
            disabled: string;
            danger: {
                disabled: string;
            };
        };
    };
    typography: {
        fontWeight: string;
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
        lineWidth: string;
    };
    border: {
        radius: string;
    };
}
