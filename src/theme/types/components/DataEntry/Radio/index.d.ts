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
