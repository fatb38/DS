export interface KitRadioThemeAntd {
    typography: {
        fontFamily: string;
        fontSize: number;
        lineHeight: number;
    };
}

export interface KitRadioThemeStyled {
    typography: {
        fontWeight: string | number;
    };
    colors: {
        border: {
            default: string;
            checked: string;
            hover: string;
            disabled: string;
            danger: {
                default: string;
                hover: string;
            };
        };
        background: {
            default: string;
            checked: string;
            hover: string;
            disabled: string;
            danger: {
                default: string;
                hover: string;
            };
        };
        bullet: {
            default: string;
            hover: string;
            disabled: string;
            danger: {
                default: string;
                hover: string;
            };
        };
        typography: {
            disabled: string;
            danger: {
                disabled: string;
            };
        };
    };
}

export type KitRadioTheme = KitRadioThemeAntd & KitRadioThemeStyled;
