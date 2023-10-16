export interface IKitBadgeTheme {
    colors: {
        background: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
            /**
             * green color
             * @TJS-type color
             */
            green: string;
            /**
             * blue color
             * @TJS-type color
             */
            blue: string;
            /**
             * blueInvert color
             * @TJS-type color
             */
            blueInvert: string;
            /**
             * gray color
             * @TJS-type color
             */
            gray: string;
            /**
             * primary color
             * @TJS-type color
             */
            primary: string;
            /**
             * error color
             * @TJS-type color
             */
            error: string;
            /**
             * succes color
             * @TJS-type color
             */
            success: string;
            /**
             * warning color
             * @TJS-type color
             */
            warning: string;
        };
        typography: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
            /**
             * green color
             * @TJS-type color
             */
            green: string;
            /**
             * blue color
             * @TJS-type color
             */
            blue: string;
            /**
             * blueInvert color
             * @TJS-type color
             */
            blueInvert: string;
            /**
             * gray color
             * @TJS-type color
             */
            gray: string;
        };
    };
    typography: {
        fontFamily: string;
    };
}
