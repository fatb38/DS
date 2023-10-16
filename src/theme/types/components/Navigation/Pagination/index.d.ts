export interface IKitPaginationTheme {
    colors: {
        background: {
            container: {
                /**
                 * default color
                 * @TJS-type color
                 */
                default: string;
                /**
                 * disabled color
                 * @TJS-type color
                 */
                disabled: string;
            };
        };
    };
    typography: {
        fontFamily: string;
        /**
         * @minimum 0
         * @TJS-type number
         */
        fontSize: number;
    };
    pagination: {
        colors: {
            background: {
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
                 * disabledActive color
                 * @TJS-type color
                 */
                disabledActive: string;
            };
        };
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
    };
    prevNext: {
        colors: {
            background: {
                /**
                 * default color
                 * @TJS-type color
                 */
                default: string;
            };
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
                 * hover color
                 * @TJS-type color
                 */
                hover: string;
            };
        };
        typography: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            fontSize: number;
        };
    };
    selector: {
        colors: {
            background: {
                /**
                 * default color
                 * @TJS-type color
                 */
                default: string;
            };
            border: {
                /**
                 * default color
                 * @TJS-type color
                 */
                default: string;
            };
        };
    };
    quickJumper: {
        colors: {
            border: {
                /**
                 * default color
                 * @TJS-type color
                 */
                default: string;
            };
        };
    };
}
