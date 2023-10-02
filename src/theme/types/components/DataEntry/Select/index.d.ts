export interface IKitSelectDropDownTheme {
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

export interface IKitSelectColorBarTheme {
    height: number;
    width: number;
    border: {
        radius: number;
    };
}

export interface IKitSelectTheme {
    height: number;
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
            default: string;
            disabled: string;
            warning: string;
            error: string;
        };
    };
    typography: {
        fontFamily: string;
        fontSize: number;
        fontWeight: {
            content: string | number;
            placeholder: string | number;
        };
    };
    DropDown: IKitSelectDropDownThemeStyled;
    ColorBadge: IKitSelectColorBarThemeStyled;
}
