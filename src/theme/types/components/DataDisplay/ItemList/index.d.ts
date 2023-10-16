export interface IKitItemListTheme {
    itemList: {
        colors: {
            background: {
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
            border: {
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
                /**
                 * hover color
                 * @TJS-type color
                 */
                hover: string;
            };
        };
    };
    title: {
        typography: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            fontWeight: string | number;
            /**
             * @minimum 0
             * @TJS-type number
             */
            fontSize: number;
        };
        colors: {
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
    description: {
        typography: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            fontWeight: string | number;
            /**
             * @minimum 0
             * @TJS-type number
             */
            fontSize: number;
        };
        colors: {
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
    collexp: {
        colors: {
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
            /**
             * hover color
             * @TJS-type color
             */
            hover: string;
        };
    };
    rafter: {
        colors: {
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
            /**
             * hover color
             * @TJS-type color
             */
            hover: string;
        };
    };
}
