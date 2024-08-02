export interface IKitDropDownTheme {
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
        divider: {
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
    };
    menuItemGroup: {
        title: {
            colors: {
                typography: {
                    /**
                     * default color
                     * @TJS-type color
                     */
                    default: string;
                };
            };
            typography: {
                fontSize: number;
                /**
                 * @minimum 0
                 * @TJS-type number
                 */
                fontWeight: number | string;
            };
        };
    };
    subMenu: {
        colors: {
            background: {
                /**
                 * active color
                 * @TJS-type color
                 */
                active: string;
            };
            typography: {
                /**
                 * active color
                 * @TJS-type color
                 */
                active: string;
            };
        };
        title: {
            colors: {
                background: {
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
        expIcon: {
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
        };
    };
}

export interface IKitDropDownCssTokens {
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
        divider: {
            colors: {
                background: {
                    default: string;
                };
            };
        };
    };
    menuItemGroup: {
        title: {
            colors: {
                typography: {
                    default: string;
                };
            };
            typography: {
                fontSize: string;
                fontWeight: string;
            };
        };
    };
    subMenu: {
        colors: {
            background: {
                active: string;
            };
            typography: {
                active: string;
            };
        };
        title: {
            colors: {
                background: {
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
        expIcon: {
            colors: {
                background: {
                    default: string;
                    disabled: string;
                };
                typography: {
                    default: string;
                    active: string;
                    disabled: string;
                };
            };
        };
    };
}
