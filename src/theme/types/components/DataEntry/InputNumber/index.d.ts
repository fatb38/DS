export interface IKitInputNumberTheme {
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
            /**
             * error color
             * @TJS-type color
             */
            error: string;
            /**
             * warning color
             * @TJS-type color
             */
            warning: string;
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
            /**
             * focused color
             * @TJS-type color
             */
            focused: string;
            /**
             * disabled color
             * @TJS-type color
             */
            disabled: string;
            /**
             * error color
             * @TJS-type color
             */
            error: string;
            /**
             * warning color
             * @TJS-type color
             */
            warning: string;
        };
        prefix: {
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
             * error color
             * @TJS-type color
             */
            error: string;
            /**
             * warning color
             * @TJS-type color
             */
            warning: string;
        };
        typography: {
            content: {
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
                 * error color
                 * @TJS-type color
                 */
                error: string;
                /**
                 * warning color
                 * @TJS-type color
                 */
                warning: string;
            };
            placeholder: {
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
                 * error color
                 * @TJS-type color
                 */
                error: string;
                /**
                 * warning color
                 * @TJS-type color
                 */
                warning: string;
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
        content: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            fontWeight: string | number;
        };
        placeholder: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            fontWeight: string | number;
        };
    };
    border: {
        /**
         * @minimum 0
         * @TJS-type number
         */
        radius: number;
    };
}

export interface IKitInputNumberCssTokens {
    colors: {
        background: {
            default: string;
            disabled: string;
            error: string;
            warning: string;
        };
        border: {
            default: string;
            hover: string;
            disabled: string;
            error: string;
            warning: string;
            focus: {
                default: string;
                warning: string;
                error: string;
            };
        };
        prefix: {
            default: string;
            disabled: string;
            error: string;
            warning: string;
        };
        typography: {
            content: {
                default: string;
                disabled: string;
                error: string;
                warning: string;
            };
            placeholder: {
                default: string;
                disabled: string;
                error: string;
                warning: string;
            };
        };
    };
    typography: {
        fontFamily: string;
        fontSize: string;
        content: {
            fontWeight: string;
        };
        placeholder: {
            fontWeight: string;
        };
    };
    border: {
        radius: string;
    };
}
