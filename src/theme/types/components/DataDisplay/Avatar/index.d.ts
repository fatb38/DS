export interface IKitAvatarTheme {
    colors: {
        background: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
            /**
             * blueInvert color
             * @TJS-type color
             */
            blueInvert: string;
        };
        typography: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
            /**
             * blueInvert color
             * @TJS-type color
             */
            blueInvert: string;
            /**
             * dark color
             * @TJS-type color
             */
            dark: string;
        };
    };
}

export interface IKitAvatarGroupTheme {
    colors: {
        background: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
        };
        typography: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
        };
    };
}
