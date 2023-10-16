export interface IKitSnackBarTheme {
    colors: {
        /**
         * background color
         * @TJS-type color
         */
        background: string;
        /**
         * border color
         * @TJS-type color
         */
        border: string;
        typography: {
            /**
             * title color
             * @TJS-type color
             */
            title: string;
        };
        cta: {
            border: {
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
            typography: {
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
        closeIcon: {
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
        fontFamily: string;
        title: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            fontSize: number;
            /**
             * @minimum 0
             * @TJS-type number
             */
            fontWeight: string | number;
        };
        cta: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            fontWeight: string | number;
        };
    };
}
