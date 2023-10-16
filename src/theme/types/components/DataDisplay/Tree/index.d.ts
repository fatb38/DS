export interface IKitTreeTheme {
    colors: {
        background: {
            /**
             * hover color
             * @TJS-type color
             */
            hover: string;
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
    icon: {
        /**
         * @minimum 0
         * @TJS-type number
         */
        fontSize: number;
    };
    checkbox: {
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
                checked: {
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
            border: {
                default: string;
                disabled: string;
                hover: string;
                checked: {
                    default: string;
                    hover: string;
                };
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
                 * checked color
                 * @TJS-type color
                 */
                checked: string;
            };
        };
    };
    treenode: {
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
            background: {
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
                /**
                 * indent color
                 * @TJS-type color
                 */
                indent: string;
            };
        };
    };
}
