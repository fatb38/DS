export interface IKitDatePickerTheme {
    colors: {
        icon: {
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
        clearIcon: {
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
             * active color
             * @TJS-type color
             */
            active: string;
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
        link: {
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
        item: {
            /**
             * hover color
             * @TJS-type color
             */
            hover: string;
            /**
             * active color
             * @TJS-type color
             */
            active: string;
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
    border: {
        /**
         * @minimum 0
         * @TJS-type number
         */
        radius: number;
    };
    RangePicker: {
        colors: {
            separator: {
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
            icon: {
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
            clearIcon: {
                /**
                 * error color
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
            background: {
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
            border: {
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
        };
        typography: {
            fontFamily: string;
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
    };
    DropDown: {
        colors: {
            button: {
                now: {
                    typography: {
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
                ok: {
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
                    typography: {
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
        };
    };
}

export interface IKitDatePickerCssTokens {
    colors: {
        icon: {
            default: string;
            disabled: string;
            warning: string;
            error: string;
        };
        clearIcon: {
            default: string;
            disabled: string;
            warning: string;
            error: string;
        };
        background: {
            default: string;
            disabled: string;
            warning: string;
            error: string;
        };
        border: {
            default: string;
            hover: string;
            active: string;
            disabled: string;
            warning: string;
            error: string;
        };
        link: {
            default: string;
            hover: string;
        };
        item: {
            hover: string;
            active: string;
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
    };
    typography: {
        fontFamily: string;
        fontSize: string;
        fontWeight: {
            content: string;
            placeholder: string;
        };
    };
    border: {
        radius: string;
    };
    RangePicker: {
        colors: {
            separator: {
                default: string;
                disabled: string;
                warning: string;
                error: string;
            };
            icon: {
                default: string;
                disabled: string;
                warning: string;
                error: string;
            };
            clearIcon: {
                default: string;
                disabled: string;
                warning: string;
                error: string;
            };
            background: {
                warning: string;
                error: string;
            };
            border: {
                disabled: string;
                warning: string;
                error: string;
            };
            typography: {
                content: {
                    disabled: string;
                    warning: string;
                    error: string;
                };
                placeholder: {
                    disabled: string;
                    warning: string;
                    error: string;
                };
            };
        };
        typography: {
            fontFamily: string;
            fontWeight: {
                content: string;
                placeholder: string;
            };
        };
    };
    DropDown: {
        colors: {
            button: {
                now: {
                    typography: {
                        default: string;
                        hover: string;
                    };
                };
                ok: {
                    background: {
                        default: string;
                        hover: string;
                        active: string;
                        disabled: string;
                    };
                    border: {
                        default: string;
                        hover: string;
                        active: string;
                        disabled: string;
                    };
                    typography: {
                        default: string;
                        disabled: string;
                    };
                };
            };
        };
    };
}
