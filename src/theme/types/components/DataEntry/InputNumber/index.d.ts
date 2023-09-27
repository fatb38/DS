export interface KitInputNumberThemeAntd {
    colors: {
        border: {
            default: string;
            hover: string;
        };
        background: {
            default: string;
            disabled: string;
        };
        typography: {
            content: string;
            placeholder: string;
        };
    };
    typography: {
        fontFamily: string;
        fontSize: number;
    };
    border: {
        radius: number;
    };
}

export interface KitInputNumberThemeStyled {
    colors: {
        background: {
            error: string;
            warning: string;
        };
        border: {
            focused: string;
            disabled: string;
            error: string;
            warning: string;
        };
        prefix: {
            default: string;
            disabled: string;
            error: string;
            warning: string;
        };
        typography: {
            content: {
                disabled: string;
                error: string;
                warning: string;
            };
            placeholder: {
                disabled: string;
                error: string;
                warning: string;
            };
        };
    };
    typography: {
        content: {
            fontWeight: string | number;
        };
        placeholder: {
            fontWeight: string | number;
        };
    };
    border: {
        radius: number;
    };
}

export type KitInputNumberTheme = KitInputNumberThemeAntd & KitInputNumberThemeStyled;
