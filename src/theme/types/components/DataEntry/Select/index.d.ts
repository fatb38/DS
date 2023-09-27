export interface KitSelectThemeAntd {
    border: {
        radius: number;
    };
    height: number;
    colors: {
        background: string;
    };
    typography: {
        fontFamily: string;
        fontSize: number;
    };
}

export interface KitSelectThemeStyled {
    border: {
        radius: number;
    };
    colors: {
        border: {
            hover: string;
            focused: string;
            disabled: string;
            warning: string;
            error: string;
        };
        typography: {
            content: {
                default: string;
                disabled: string;
                warning: string;
                error: string;
            };
            placeholder: {
                default: string;
                disabled: string;
                warning: string;
                error: string;
            };
        };
        icon: {
            arrow: {
                default: string;
                disabled: string;
                warning: string;
                error: string;
            };
            clear: {
                default: string;
                disabled: string;
                warning: string;
                error: string;
            };
        };
        background: {
            disabled: string;
            warning: string;
            error: string;
        };
    };
    typography: {
        fontWeight: {
            content: string | number;
            placeholder: string | number;
        };
    };
}

export interface KitSelectDropDownThemeStyled {
    colors: {
        typography: {
            default: string;
            selected: string;
            active: string;
            group: string;
        };
        background: {
            default: string;
            selected: string;
            active: string;
        };
    };
    typography: {
        fontFamily: string;
        fontWeight: {
            default: string | number;
            selected: string | number;
            active: string | number;
            group: string | number;
        };
    };
    border: {
        radius: number;
    };
}

export interface KitSelectColorBarThemeStyled {
    height: number;
    width: number;
    border: {
        radius: number;
    };
}

export type KitSelectTheme = KitSelectThemeAntd &
    KitSelectThemeStyled & {
        DropDown: KitSelectDropDownThemeStyled;
        ColorBadge: KitSelectColorBarThemeStyled;
    };
