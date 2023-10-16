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
