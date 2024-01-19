export interface IKitRadioTheme {
    colors: {
        border: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
            /**
             * checked color
             * @TJS-type color
             */
            checked: string;
            /**
             * hover color
             * @TJS-type color
             */
            hover: string;
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
        background: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
            /**
             * checked color
             * @TJS-type color
             */
            checked: string;
            /**
             * hover color
             * @TJS-type color
             */
            hover: string;
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
        bullet: {
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
    };
}

export type IKitRadioCssTokens = {
    colors: {
        border: {
            default: string;
            checked: string;
            hover: string;
            focus: string;
            disabled: string;
            danger: {
                default: string;
                hover: string;
                focus: string;
            };
        };
        background: {
            default: string;
            checked: string;
            hover: string;
            disabled: string;
            danger: {
                default: string;
                hover: string;
            };
        };
        bullet: {
            default: string;
            hover: string;
            disabled: string;
            danger: {
                default: string;
                hover: string;
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
    };
};
