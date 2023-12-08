export interface IKitPaginationTheme {
    colors: {
        background: {
            container: {
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
    };
    typography: {
        fontFamily: string;
        /**
         * @minimum 0
         * @TJS-type number
         */
        fontSize: number;
    };
    pagination: {
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
            typography: {
                /**
                 * disabledActive color
                 * @TJS-type color
                 */
                disabledActive: string;
            };
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
    };
    prevNext: {
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
            typography: {
                /**
                 * hover color
                 * @TJS-type color
                 */
                hover: string;
            };
        };
        typography: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            fontSize: number;
        };
    };
    selector: {
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
            };
        };
    };
    quickJumper: {
        colors: {
            border: {
                /**
                 * default color
                 * @TJS-type color
                 */
                default: string;
            };
        };
    };
}

export interface IKitPaginationCssTokens {
    colors: {
        background: {
            container: {
                default: string;
                disabled: string;
            };
        };
    };
    typography: {
        fontFamily: string;
        fontSize: string;
    };
    pagination: {
        colors: {
            background: {
                default: string;
                hover: string;
            };
            typography: {
                disabledActive: string;
            };
        };
        border: {
            default: string;
            hover: string;
        };
    };
    prevNext: {
        colors: {
            background: {
                default: string;
            };
            border: {
                default: string;
                hover: string;
            };
            typography: {
                hover: string;
            };
        };
        typography: {
            fontSize: string;
        };
    };
    selector: {
        colors: {
            background: {
                default: string;
            };
            border: {
                default: string;
            };
        };
    };
    quickJumper: {
        colors: {
            border: {
                default: string;
            };
        };
    };
}
