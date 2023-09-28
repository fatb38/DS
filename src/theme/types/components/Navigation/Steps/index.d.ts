export interface KitStepsThemeAntd {
    colors: {
        split: {
            default: string;
        };
        typography: {
            description: {
                default: string;
            };
            text: {
                default: string;
            };
        };
    };
    typography: {
        fontfamily: string;
        fontSize: number;
    };
}

export interface KitStepsThemeStyled {
    colors: {
        dot: {
            default: string;
        };
        title: {
            default: string;
        };
        description: {
            default: string;
        };
    };
}

export type KitStepsTheme = KitStepsThemeAntd & KitStepsThemeStyled;
