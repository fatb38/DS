export interface IKitCardTheme {
    colors: {
        background: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
            /**
             * default color
             * @TJS-type color
             */
            disabled: string;
        };
        typography: {
            title: {
                /**
                 * default color
                 * @TJS-type color
                 */
                default: string;
                /**
                 * default color
                 * @TJS-type color
                 */
                disabled: string;
            };
            description: {
                /**
                 * default color
                 * @TJS-type color
                 */
                default: string;
                /**
                 * default color
                 * @TJS-type color
                 */
                disabled: string;
            };
            extra: {
                /**
                 * default color
                 * @TJS-type color
                 */
                default: string;
                /**
                 * default color
                 * @TJS-type color
                 */
                disabled: string;
            };
        };
        border: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
            /**
             * default color
             * @TJS-type color
             */
            focus: string;
            /**
             * default color
             * @TJS-type color
             */
            hover: string;
            /**
             * default color
             * @TJS-type color
             */
            disabled: string;
            /**
             * default color
             * @TJS-type color
             */
            selected: string;
        };
        separator: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
            /**
             * default color
             * @TJS-type color
             */
            disabled: string;
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
        description: {
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
        extra: {
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
    };
}

export interface IKitCardCssTokens {
    colors: {
        background: {
            default: string;
            disabled: string;
        };
        typography: {
            title: {
                default: string;
                disabled: string;
            };
            description: {
                default: string;
                disabled: string;
            };
            extra: {
                default: string;
                disabled: string;
            };
        };
        border: {
            default: string;
            focus: string;
            hover: string;
            disabled: string;
            selected: string;
        };
        separator: {
            default: string;
            disabled: string;
        };
    };
    typography: {
        fontFamily: string;
        title: {
            fontSize: string;
            fontWeight: string;
        };
        description: {
            fontSize: string;
            fontWeight: string;
        };
        extra: {
            fontSize: string;
            fontWeight: string;
        };
    };
}
