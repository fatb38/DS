interface TypographyTitleLevel {
    typography: {
        fontSize: number;
        lineHeight: number;
    };
}

export interface KitTypographyThemeStyled {
    colors: {
        typography: {
            default: string;
        };
    };
    typography: {
        fontFamily: string;
        fontWeight: number | string;
        lineHeight: number;
    };
    Title: {
        level1: TypographyTitleLevel;
        level2: TypographyTitleLevel;
        level3: TypographyTitleLevel;
        level4: TypographyTitleLevel;
    };
    Text: {
        fontWeight: {
            regular: number | string;
            medium: number | string;
            bold: number | string;
        };
    };
    Paragraph: {
        fontWeight: {
            regular: number | string;
            medium: number | string;
            bold: number | string;
        };
    };
}

export type KitTypographyTheme = KitTypographyThemeStyled;
