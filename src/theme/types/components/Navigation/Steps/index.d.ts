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

export interface IKitStepsCssTokens {
    colors: {
        dot: {
            default: string;
        };
        split: {
            default: string;
        };
        typography: {
            description: {
                default: string;
                active: string;
            };
            text: {
                default: string;
                active: string;
            };
        };
    };
    typography: {
        fontfamily: string;
        fontSize: string;
    };
}
