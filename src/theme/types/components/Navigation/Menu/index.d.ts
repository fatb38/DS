export interface IKitMenuTheme {
    colors: {
        background: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
        };
    };
    itemMenu: {
        colors: {
            background: {
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
                /**
                 * hover color
                 * @TJS-type color
                 */
                hover: string;
                /**
                 * danger color
                 * @TJS-type color
                 */
                danger: string;
            };
            border: {
                /**
                 * active color
                 * @TJS-type color
                 */
                active: string;
            };
            value: {
                /**
                 * default color
                 * @TJS-type color
                 */
                default: string;
            };
            rafter: {
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
            title: {
                /**
                 * default color
                 * @TJS-type color
                 */
                default: string;
                /**
                 * danger color
                 * @TJS-type color
                 */
                danger: string;
            };
            icon: {
                /**
                 * default color
                 * @TJS-type color
                 */
                default: string;
                /**
                 * danger color
                 * @TJS-type color
                 */
                danger: string;
            };
        };
    };
}

export interface IKitMenuCssTokens {
    colors: {
        background: {
            default: string;
        };
    };
    itemMenu: {
        colors: {
            background: {
                default: string;
                active: string;
                hover: string;
                danger: string;
            };
            border: {
                active: string;
            };
            value: {
                default: string;
            };
            rafter: {
                default: string;
                hover: string;
            };
            title: {
                default: string;
                danger: string;
            };
            icon: {
                default: string;
                danger: string;
            };
        };
    };
}
