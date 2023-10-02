interface IKitTagThemeColor {
    background: {
        default: string;
    };
    typography: {
        default: string;
        hover: string;
        closeIcon: string;
    };
}

export interface IKitTagTheme {
    colors: {
        default: {
            background: {
                default: string;
            };
            typography: {
                default: string;
            };
        };
        red: KitTagThemeColor;
        green: KitTagThemeColor;
        blue: KitTagThemeColor;
        blueInvert: KitTagThemeColor;
    };
    typography: {
        fontFamily: string;
        fontSize: number;
        fontWeight: number | string;
    };
    border: {
        radius: number;
    };
}
