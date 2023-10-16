export interface IKitAlertTheme {
    colors: {
        background: {
            /**
             * success color
             * @TJS-type color
             */
            success: string;
            /**
             * info color
             * @TJS-type color
             */
            info: string;
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
            /**
             * default color
             * @TJS-type color
             */
            default: string;
        };
        border: {
            /**
             * success color
             * @TJS-type color
             */
            success: string;
            /**
             * info color
             * @TJS-type color
             */
            info: string;
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
            alert: {
                /**
                 * success color
                 * @TJS-type color
                 */
                success: string;
                /**
                 * info color
                 * @TJS-type color
                 */
                info: string;
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
    border: {
        /**
         * @minimum 0
         * @TJS-type number
         */
        radius: number;
    };
    typography: {
        fontFamily: string;
        fontSize: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            message: number;
            /**
             * @minimum 0
             * @TJS-type number
             */
            description: number;
        };
    };
    icon: {
        alert: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            size: number;
        };
        close: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            size: number;
        };
    };
}
