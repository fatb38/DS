export interface KitTagThemeAntd {
    colors: {
        background: {
            default: string;
        };
        typography: {
            default: string;
        };
    };
    border: {
        radius: number;
    };
}

interface KitTagThemeColor {
    background: {
        default: string;
    };
    typography: {
        default: string;
        hover: string;
        closeIcon: string;
    };
}

export interface KitTagThemeStyled {
    colors: {
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
}

export type KitTagTheme = KitTagThemeAntd & KitTagThemeStyled;
