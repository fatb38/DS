export interface IKitBadgeTheme {
    colors: {
        background: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
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
        };
    };
    typography: {
        fontFamily: string;
    };
}

export interface IKitBadgeCssTokens {
    colors: {
        background: {
            default: string;
            primary: string;
            error: string;
            success: string;
            warning: string;
        };
        typography: {
            default: string;
        };
    };
    typography: {
        fontFamily: string;
    };
}
