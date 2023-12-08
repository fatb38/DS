export interface IKitSelectDropDownTheme {
    colors: {
        typography: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
            /**
             * selected color
             * @TJS-type color
             */
            selected: string;
            /**
             * active color
             * @TJS-type color
             */
            active: string;
            /**
             * group color
             * @TJS-type color
             */
            group: string;
        };
        background: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
            /**
             * selected color
             * @TJS-type color
             */
            selected: string;
            /**
             * active color
             * @TJS-type color
             */
            active: string;
        };
    };
    typography: {
        fontFamily: string;
        fontWeight: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            default: string | number;
            /**
             * @minimum 0
             * @TJS-type number
             */
            selected: string | number;
            /**
             * @minimum 0
             * @TJS-type number
             */
            active: string | number;
            /**
             * @minimum 0
             * @TJS-type number
             */
            group: string | number;
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

export interface IKitSelectColorBarTheme {
    /**
     * @minimum 0
     * @TJS-type number
     */
    height: number;
    /**
     * @minimum 0
     * @TJS-type number
     */
    width: number;
    border: {
        /**
         * @minimum 0
         * @TJS-type number
         */
        radius: number;
    };
}

export interface IKitSelectTheme {
    /**
     * @minimum 0
     * @TJS-type number
     */
    height: number;
    border: {
        /**
         * @minimum 0
         * @TJS-type number
         */
        radius: number;
    };
    colors: {
        border: {
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
             * warning color
             * @TJS-type color
             */
            warning: string;
            /**
             * error color
             * @TJS-type color
             */
            error: string;
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
                 * warning color
                 * @TJS-type color
                 */
                warning: string;
                /**
                 * error color
                 * @TJS-type color
                 */
                error: string;
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
                 * warning color
                 * @TJS-type color
                 */
                warning: string;
                /**
                 * error color
                 * @TJS-type color
                 */
                error: string;
            };
        };
        icon: {
            arrow: {
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
                 * warning color
                 * @TJS-type color
                 */
                warning: string;
                /**
                 * error color
                 * @TJS-type color
                 */
                error: string;
            };
            clear: {
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
                 * warning color
                 * @TJS-type color
                 */
                warning: string;
                /**
                 * error color
                 * @TJS-type color
                 */
                error: string;
            };
        };
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
             * warning color
             * @TJS-type color
             */
            warning: string;
            /**
             * error color
             * @TJS-type color
             */
            error: string;
        };
    };
    typography: {
        fontFamily: string;
        /**
         * @minimum 0
         * @TJS-type number
         */
        fontSize: number;
        fontWeight: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            content: string | number;
            /**
             * @minimum 0
             * @TJS-type number
             */
            placeholder: string | number;
        };
    };
    DropDown: IKitSelectDropDownTheme;
    ColorBadge: IKitSelectColorBarTheme;
}

export interface IKitSelectCssTokens {
    height: string;
    border: {
        radius: string;
    };
    colors: {
        border: {
            hover: string;
            focused: string;
            disabled: string;
            warning: string;
            error: string;
        };
        typography: {
            content: {
                default: string;
                disabled: string;
                warning: string;
                error: string;
            };
            placeholder: {
                default: string;
                disabled: string;
                warning: string;
                error: string;
            };
        };
        icon: {
            arrow: {
                default: string;
                disabled: string;
                warning: string;
                error: string;
            };
            clear: {
                default: string;
                disabled: string;
                warning: string;
                error: string;
            };
        };
        background: {
            default: string;
            disabled: string;
            warning: string;
            error: string;
        };
    };
    typography: {
        fontFamily: string;
        fontSize: string;
        fontWeight: {
            content: string;
            placeholder: string;
        };
    };
}

export interface IKitSelectColorBadgeCssTokens {
    height: string;
    width: string;
    border: {
        radius: string;
    };
}

export interface IKitSelectDropDownCssTokens {
    colors: {
        typography: {
            default: string;
            selected: string;
            active: string;
            group: string;
        };
        background: {
            default: string;
            selected: string;
            active: string;
        };
    };
    typography: {
        fontFamily: string;
        fontWeight: {
            default: string;
            selected: string;
            active: string;
            group: string;
        };
    };
    border: {
        radius: string;
    };
}
