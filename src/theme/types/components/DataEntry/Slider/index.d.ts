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

export interface IKitSliderCssTokens {
    handle: {
        colors: {
            background: {
                hover: string;
                focus: string;
            };
            border: {
                default: string;
                disabled: string;
            };
        };
        size: string;
        border: string;
    };
    rail: {
        colors: {
            background: {
                default: string;
                hover: string;
            };
        };
        size: string;
    };
    dot: {
        colors: {
            border: {
                default: string;
                active: string;
            };
        };
        size: string;
    };
    track: {
        colors: {
            background: {
                default: string;
                hover: string;
            };
        };
    };
    startIcon: {
        colors: {
            default: string;
        };
    };
    endIcon: {
        colors: {
            default: string;
        };
    };
}
