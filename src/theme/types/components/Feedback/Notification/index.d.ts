export interface IKitNotificationTheme {
    colors: {
        typography: {
            message: {
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
            background: {
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
            content: number;
        };
        fontWeight: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            message: string | number;
        };
    };
}

export interface IKitNotificationCssTokens {
    colors: {
        typography: {
            message: {
                info: string;
                success: string;
                warning: string;
                error: string;
            };
            subtitle: string;
        };
        icon: {
            info: string;
            success: string;
            warning: string;
            error: string;
            background: {
                info: string;
                success: string;
                warning: string;
                error: string;
            };
        };
    };
    typography: {
        fontFamily: string;
        fontSize: {
            message: string;
            content: string;
        };
        fontWeight: {
            message: string;
        };
    };
}
