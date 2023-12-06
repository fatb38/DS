export interface IKitItemCardTheme {
    card: {
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
            border: {
                default: string;
                hover: string;
            };
        };
        border: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            radius: number;
        };
        typography: {
            fontFamily: string;
        };
    };
    colorBar: {
        /**
         * @minimum 0
         * @TJS-type number
         */
        thickness: number;
        border: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            radius: number;
        };
    };
    select: {
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
                 * disabled color
                 * @TJS-type color
                 */
                disabled: string;
            };
        };
    };
    expend: {
        colors: {
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
                /**
                 * disabled color
                 * @TJS-type color
                 */
                disabled: string;
            };
        };
    };
    image: {
        colors: {
            border: {
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
    };
    icon: {
        colors: {
            border: {
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
    };
    title: {
        colors: {
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
        typography: {
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
    description: {
        colors: {
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
        typography: {
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
    footer: {
        colors: {
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
        typography: {
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

export interface IKitItemCardCssTokens {
    card: {
        colors: {
            background: {
                default: string;
                disabled: string;
            };
            border: {
                default: string;
                hover: string;
            };
        };
        border: {
            radius: string;
        };
        typography: {
            fontFamily: string;
        };
    };
    colorBar: {
        thickness: string;
        border: {
            radius: string;
        };
    };
    select: {
        colors: {
            background: {
                disabled: string;
            };
            typography: {
                default: string;
                disabled: string;
            };
        };
    };
    expend: {
        colors: {
            typography: {
                default: string;
                hover: string;
                disabled: string;
            };
        };
    };
    image: {
        colors: {
            border: {
                default: string;
            };
        };
        border: {
            radius: string;
        };
    };
    icon: {
        colors: {
            border: {
                default: string;
            };
        };
        border: {
            radius: string;
        };
    };
    title: {
        colors: {
            typography: {
                default: string;
                disabled: string;
            };
        };
        typography: {
            fontSize: number;
            fontWeight: string;
        };
    };
    description: {
        colors: {
            typography: {
                default: string;
                disabled: string;
            };
        };
        typography: {
            fontSize: string;
            fontWeight: string;
        };
    };
    footer: {
        colors: {
            typography: {
                default: string;
                disabled: string;
            };
        };
        typography: {
            fontSize: string;
            fontWeight: string;
        };
    };
}
