export interface IKitSwitchTheme {
    colors: {
        background: {
            default: {
                /**
                 * on color
                 * @TJS-type color
                 */
                on: string;
                /**
                 * off color
                 * @TJS-type color
                 */
                off: string;
            };
            /**
             * disabled color
             * @TJS-type color
             */
            disabled: string;
        };
        handle: {
            background: {
                default: {
                    /**
                     * on color
                     * @TJS-type color
                     */
                    on: string;
                    /**
                     * off color
                     * @TJS-type color
                     */
                    off: string;
                };
                /**
                 * disabled color
                 * @TJS-type color
                 */
                disabled: string;
            };
            border: {
                default: {
                    /**
                     * on color
                     * @TJS-type color
                     */
                    on: string;
                    /**
                     * off color
                     * @TJS-type color
                     */
                    off: string;
                };
                /**
                 * disabled color
                 * @TJS-type color
                 */
                disabled: string;
            };
        };
    };
}
