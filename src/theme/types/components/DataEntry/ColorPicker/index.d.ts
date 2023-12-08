export interface IKitColorPickerTheme {
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
             * default color
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
             * focused color
             * @TJS-type color
             */
            focused: string;
            /**
             * disabled color
             * @TJS-type color
             */
            disabled: string;
        };
    };
    typography: {
        fontFamily: string;
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
    border: {
        /**
         * @minimum 0
         * @TJS-type number
         */
        radius: number;
    };
    colorBlock: {
        border: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            radius: number;
        };
    };
    panel: {
        input: {
            typography: {
                /**
                 * @minimum 0
                 * @TJS-type number
                 */
                fontWeight: string | number;
            };
            colors: {
                prefix: {
                    /**
                     * default color
                     * @TJS-type color
                     */
                    default: string;
                };
            };
        };
        select: {
            typography: {
                /**
                 * @minimum 0
                 * @TJS-type number
                 */
                fontWeight: string | number;
            };
            colors: {
                typography: {
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
                };
            };
        };
        preset: {
            typography: {
                /**
                 * @minimum 0
                 * @TJS-type number
                 */
                fontWeight: string | number;
            };
            colors: {
                typography: {
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
                };
                empty: {
                    /**
                     * default color
                     * @TJS-type color
                     */
                    default: string;
                };
            };
        };
    };
}
export interface IKitColorPickerCssTokens {
    colors: {
        background: {
            default: string;
            disabled: string;
        };
        typography: {
            default: string;
            disabled: string;
        };
        border: {
            default: string;
            hover: string;
            focused: string;
            disabled: string;
        };
    };
    typography: {
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
    };
    border: {
        radius: string;
    };
    colorBlock: {
        border: {
            radius: string;
        };
    };
    panel: {
        input: {
            typography: {
                fontWeight: string;
            };
            colors: {
                prefix: {
                    default: string;
                };
            };
        };
        select: {
            typography: {
                fontWeight: string;
            };
            colors: {
                typography: {
                    default: string;
                };
                rafter: {
                    default: string;
                };
            };
        };
        preset: {
            typography: {
                fontWeight: string;
            };
            colors: {
                typography: {
                    default: string;
                };
                rafter: {
                    default: string;
                };
                empty: {
                    default: string;
                };
            };
        };
    };
}
