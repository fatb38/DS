export interface IKitCardTheme {
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
        typography: {
            headerTitle: {
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
            contentTitle: {
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
            description: {
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
            extra: {
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
                 * disabled color
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
             * focus color
             * @TJS-type color
             */
            focus: string;
            /**
             * hover color
             * @TJS-type color
             */
            hover: string;
            /**
             * disabled color
             * @TJS-type color
             */
            disabled: string;
        };
        separator: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
        };
        actions: {
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
        shadow: {
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
            /**
             * focus color
             * @TJS-type color
             */
            focus: string;
        };
    };
    typography: {
        fontFamily: string;
        headerTitle: {
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
        contentTitle: {
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
        desciption: {
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
        linkIcon: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            fontSize: number;
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
            headerTitle: {
                default: string;
                disabled: string;
            };
            contentTitle: {
                default: string;
                disabled: string;
            };
            description: {
                default: string;
                disabled: string;
            };
            extra: {
                default: string;
                hover: string;
                disabled: string;
            };
        };
        border: {
            default: string;
            focus: string;
            hover: string;
            disabled: string;
        };
        separator: {
            default: string;
        };
        actions: {
            default: string;
            disabled: string;
            hover: string;
        };
        shadow: {
            default: string;
            disabled: string;
            hover: string;
            focus: string;
        };
    };
    typography: {
        fontFamily: string;
        headerTitle: {
            fontSize: string;
            fontWeight: string;
        };
        contentTitle: {
            fontSize: string;
            fontWeight: string;
        };
        description: {
            fontSize: string;
            fontWeight: string;
        };
        linkIcon: {
            fontSize: string;
        };
    };
}
