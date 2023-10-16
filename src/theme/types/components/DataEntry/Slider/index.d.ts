export interface IKitSliderTheme {
    handle: {
        colors: {
            background: {
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
            };
        };
        /**
         * @minimum 0
         * @TJS-type number
         */
        size: number;
        /**
         * @minimum 0
         * @TJS-type number
         */
        border: number;
    };
    rail: {
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
        };
        /**
         * @minimum 0
         * @TJS-type number
         */
        size: number;
    };
    dot: {
        colors: {
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
        /**
         * @minimum 0
         * @TJS-type number
         */
        size: number;
    };
    track: {
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
        };
    };
    startIcon: {
        colors: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
        };
    };
    endIcon: {
        colors: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
        };
    };
}
