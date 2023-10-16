export interface IKitModalTheme {
    typography: {
        fontFamily: string;
        fontSize: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            title: number;
            /**
             * @minimum 0
             * @TJS-type number
             */
            content: number;
        };
        fontWeight: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            title: string | number;
            /**
             * @minimum 0
             * @TJS-type number
             */
            content: string | number;
        };
    };
    shadow: string;
    spacing: {
        vertical: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            items: number;
            /**
             * @minimum 0
             * @TJS-type number
             */
            text: number;
        };
    };
    border: {
        /**
         * @minimum 0
         * @TJS-type number
         */
        radius: number;
    };
    colors: {
        background: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
            /**
             * info color
             * @TJS-type color
             */
            info: string;
            /**
             * success color
             * @TJS-type color
             */
            success: string;
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
             * info color
             * @TJS-type color
             */
            info: string;
            /**
             * success color
             * @TJS-type color
             */
            success: string;
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
    Overlay: {
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
}
