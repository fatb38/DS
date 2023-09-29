export interface KitDividerThemeAntd {
    colors: {
        typography: {
            default: string;
        };
        split: {
            default: string;
        };
    };
    typography: {
        fontFamily: string;
        fontSize: number;
        lineHeight: number;
    };
}

export interface KitDividerThemeStyled {
    colors: {
        split: {
            lightGrey: string;
        };
    };
    typography: {
        fontWeight: string | number;
    };
}

export type KitDividerTheme = KitDividerThemeAntd & KitDividerThemeStyled;
