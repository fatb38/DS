export interface KitBadgeThemeAntd {
    colors: {
        background: {
            primary: string;
            error: string;
            success: string;
            warning: string;
        };
    };
    typography: {
        fontFamily: string;
    };
}

export interface KitBadgeThemeStyled {
    colors: {
        background: {
            default: string;
            green: string;
            blue: string;
            blueInvert: string;
            gray: string;
        };
        typography: {
            default: string;
            green: string;
            blue: string;
            blueInvert: string;
            gray: string;
        };
    };
}

export type KitBadgeTheme = KitBadgeThemeAntd & KitBadgeThemeStyled;
