interface ITypographyTitleLevel {
    typography: {
        fontSize: number;
        lineHeight: number;
    };
}

export interface IKitTypographyTheme {
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
        level1: ITypographyTitleLevel;
        level2: ITypographyTitleLevel;
        level3: ITypographyTitleLevel;
        level4: ITypographyTitleLevel;
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
    Link: {
        colors: {
            typography: {
                default: string;
                hover: string;
            };
        };
        fontWeight: {
            regular: number | string;
            medium: number | string;
            bold: number | string;
        };
    };
}
