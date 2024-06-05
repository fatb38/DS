export interface IKitSideMenuTheme {
    /**
     * shadow css
     */
    shadow: string;
    width: {
        /**
         * menu width when closed
         * @TJS-type number
         */
        closed: number;
        /**
         * menu width when opened
         * @TJS-type number
         */
        open: number;
    };
    padding: {
        /**
         * menu horiontal padding
         * @TJS-type number
         */
        vertical: number;
        /**
         * menu vertical padding
         * @TJS-type number
         */
        horizontal: number;
    };
    spacing: {
        /**
         * vertical spacing between items
         * @TJS-type number
         */
        item: number;
    };
    colors: {
        /**
         * menu background color
         * @TJS-type color
         */
        background: string;
        /**
         * menu text color
         * @TJS-type color
         */
        text: string;
    };
    item: {
        colors: {
            /**
             * menu separator color
             * @TJS-type color
             */
            separator: string;
            background: {
                /**
                 * menu item default background
                 * @TJS-type color
                 */
                default: string;
                /**
                 * menu item hover background
                 * @TJS-type color
                 */
                hover: string;
                /**
                 * menu item active background
                 * @TJS-type color
                 */
                active: string;
                /**
                 * menu item disabled background
                 * @TJS-type color
                 */
                disabled: string;
            };
            text: {
                /**
                 * menu item default color
                 * @TJS-type color
                 */
                default: string;
                /**
                 * menu item active color
                 * @TJS-type color
                 */
                active: string;
                /**
                 * menu item disabled color
                 * @TJS-type color
                 */
                disabled: string;
            };
            icon: {
                /**
                 * menu item disabled color
                 * @TJS-type color
                 */
                default: string;
            };
        };
        /**
         * menu item spacingbetween icon and title
         * @TJS-type number
         */
        spacing: number;
        /**
         * menu item border radius css
         */
        radius: string;
        /**
         * menu item offset when active
         * @TJS-type number
         */
        activeOffset: number;
    };
}

export interface IKitSideMenuCssTokens {
    shadow: string;
    width: {
        closed: number;
        open: number;
    };
    padding: {
        vertical: number;
        horizontal: number;
    };
    spacing: {
        item: number;
    };
    colors: {
        background: string;
        text: string;
    };
    item: {
        colors: {
            separator: string;
            background: {
                default: string;
                hover: string;
                active: string;
                disabled: string;
            };
            text: {
                default: string;
                active: string;
                disabled: string;
            };
            icon: {
                default: string;
            };
        };
        spacing: number;
        radius: string;
        activeOffset: number;
    };
}
