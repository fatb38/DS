export interface IKitStepsTheme {
    colors: {
        dot: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
        };
        split: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
        };
        typography: {
            description: {
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
            text: {
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
    };
    typography: {
        fontfamily: string;
        /**
         * @minimum 0
         * @TJS-type number
         */
        fontSize: number;
    };
}
