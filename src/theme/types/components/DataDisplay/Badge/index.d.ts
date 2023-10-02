export interface IKitBadgeTheme {
    colors: {
        background: {
            default: string;
            green: string;
            blue: string;
            blueInvert: string;
            gray: string;
            primary: string;
            error: string;
            success: string;
            warning: string;
        };
        typography: {
            default: string;
            green: string;
            blue: string;
            blueInvert: string;
            gray: string;
        };
    };
    typography: {
        fontFamily: string;
    };
}
