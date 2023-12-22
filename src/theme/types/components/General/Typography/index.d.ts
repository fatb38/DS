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
export interface IKitTypographyCssTokens {
    colors: {
        typography: {
            default: string;
        };
    };
    typography: {
        fontFamily: string;
        fontWeight: string;
        lineHeight: string;
    };
    Title: {
        level1: {
            typography: {
                fontSize: string;
                lineHeight: string;
            };
        };
        level2: {
            typography: {
                fontSize: string;
                lineHeight: string;
            };
        };
        level3: {
            typography: {
                fontSize: string;
                lineHeight: string;
            };
        };
        level4: {
            typography: {
                fontSize: string;
                lineHeight: string;
            };
        };
    };
    Text: {
        fontWeight: {
            regular: string;
            medium: string;
            bold: string;
        };
    };
    Paragraph: {
        fontWeight: {
            regular: string;
            medium: string;
            bold: string;
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
            regular: string;
            medium: string;
            bold: string;
        };
    };
}
