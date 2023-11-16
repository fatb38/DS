interface IKitDraggerTheme {
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
        dragIcon: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
        };
        typography: {
            /**
             * text color
             * @TJS-type color
             */
            text: string;
            /**
             * hint color
             * @TJS-type color
             */
            hint: string;
            /**
             * item color
             * @TJS-type color
             */
            item: string;
        };
    };
    typography: {
        fontSize: number;
        /**
         * @minimum 0
         * @TJS-type number
         */
        fontWeight: string | number;
        /**
         * @minimum 0
         * @TJS-type number
         */
        lineHeight: number;
    };
}

export interface IKitUploadTheme {
    colors: {
        card: {
            border: {
                /**
                 * default color
                 * @TJS-type color
                 */
                default: string;
            };
            background: {
                /**
                 * default color
                 * @TJS-type color
                 */
                default: string;
            };
        };
        list: {
            preview: {
                /**
                 * hover color
                 * @TJS-type color
                 */
                hover: string;
            };
            border: {
                /**
                 * default color
                 * @TJS-type color
                 */
                default: string;
                /**
                 * uploading color
                 * @TJS-type color
                 */
                uploading: string;
                /**
                 * error color
                 * @TJS-type color
                 */
                error: string;
            };
            typography: {
                /**
                 * done color
                 * @TJS-type color
                 */
                done: string;
                /**
                 * error color
                 * @TJS-type color
                 */
                error: string;
                /**
                 * uploading color
                 * @TJS-type color
                 */
                uploading: string;
            };
        };
    };
    Dragger: IKitDraggerTheme;
}
