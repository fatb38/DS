export interface IKitTabsTheme {
    card: {
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
                 * active color
                 * @TJS-type color
                 */
                active: string;
            };
        };
        border: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            radius: number;
        };
        padding: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            vertical: number;
            /**
             * @minimum 0
             * @TJS-type number
             */
            horizontal: number;
        };
    };
    typography: {
        fontFamily: string;
        fontSize: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            s: number;
            /**
             * @minimum 0
             * @TJS-type number
             */
            m: number;
            /**
             * @minimum 0
             * @TJS-type number
             */
            l: number;
        };
        colors: {
            /**
             * disabled color
             * @TJS-type color
             */
            disabled: string;
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
             * selected color
             * @TJS-type color
             */
            selected: string;
        };
    };
    extraContent: {
        colors: {
            border: {
                /**
                 * default color
                 * @TJS-type color
                 */
                default: string;
            };
            typography: {
                /**
                 * default color
                 * @TJS-type color
                 */
                default: string;
            };
        };
        border: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            radius: number;
        };
        padding: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            vertical: number;
            /**
             * @minimum 0
             * @TJS-type number
             */
            horizontal: number;
        };
        margin: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            vertical: number;
            /**
             * @minimum 0
             * @TJS-type number
             */
            horizontal: number;
        };
    };
    DropDown: {
        colors: {
            background: {
                /**
                 * default color
                 * @TJS-type color
                 */
                default: string;
            };
            typography: {
                /**
                 * default color
                 * @TJS-type color
                 */
                default: string;
            };
        };
        typography: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            fontFamily: string;
            /**
             * @minimum 0
             * @TJS-type number
             */
            fontWeight: number | string;
        };
        menu: {
            colors: {
                background: {
                    /**
                     * default color
                     * @TJS-type color
                     */
                    default: string;
                };
            };
        };
        menuItem: {
            colors: {
                background: {
                    /**
                     * active color
                     * @TJS-type color
                     */
                    active: string;
                    /**
                     * selected color
                     * @TJS-type color
                     */
                    selected: string;
                    /**
                     * disabled color
                     * @TJS-type color
                     */
                    disabled: string;
                };
                typography: {
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
                     * disabled color
                     * @TJS-type color
                     */
                    disabled: string;
                };
            };
            typography: {
                /**
                 * @minimum 0
                 * @TJS-type number
                 */
                fontWeight: number | string;
            };
        };
    };
}

export interface IKitTabsCssTokens {
    card: {
        colors: {
            background: {
                default: string;
            };
            border: {
                default: string;
                active: string;
            };
        };
        border: {
            radius: string;
        };
        padding: {
            vertical: string;
            horizontal: string;
        };
    };
    typography: {
        fontFamily: string;
        fontSize: {
            s: string;
            m: string;
            l: string;
        };
        colors: {
            disabled: string;
            active: string;
            hover: string;
            selected: string;
        };
    };
    extraContent: {
        colors: {
            border: {
                default: string;
            };
            typography: {
                default: string;
            };
        };
        border: {
            radius: string;
        };
        padding: {
            vertical: string;
            horizontal: string;
        };
        margin: {
            vertical: string;
            horizontal: string;
        };
    };
    DropDown: {
        colors: {
            background: {
                default: string;
            };
            typography: {
                default: string;
            };
        };
        typography: {
            fontFamily: string;
            fontWeight: string;
        };
        menu: {
            colors: {
                background: {
                    default: string;
                };
            };
        };
        menuItem: {
            colors: {
                background: {
                    active: string;
                    selected: string;
                    disabled: string;
                };
                typography: {
                    default: string;
                    active: string;
                    disabled: string;
                };
            };
            typography: {
                fontWeight: string;
            };
        };
    };
}
