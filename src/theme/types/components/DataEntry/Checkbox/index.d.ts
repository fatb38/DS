export interface KitCheckboxThemeAntd {
    typography: {
        fontFamily: string;
        fontSize: number;
        lineHeight: number;
        lineWidth: number;
    };
    border: {
        radius: number;
    };
    colors: {
        border: {
            default: string;
        };
        background: {
            check: string;
            hover: string;
        };
    };
}

export interface KitCheckboxThemeStyled {
    colors: {
        default: {
            background: {
                hover: string;
            };
        };
        checked: {
            background: {
                hover: string;
            };
        };

        background: {
            check: string;
            hover: string;
            focus: string;
            disabled: string;
            danger: {
                default: string;
                hover: string;
            };
        };
        border: {
            check: string;
            hover: string;
            focus: string;
            disabled: string;
            danger: {
                default: string;
                hover: string;
                focus: string;
            };
        };
        typography: {
            disabled: string;
            danger: {
                disabled: string;
            };
        };
    };
    typography: {
        fontWeight: string | number;
    };
}

export type KitCheckboxTheme = KitCheckboxThemeAntd & KitCheckboxThemeStyled;
