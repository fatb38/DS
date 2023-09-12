export interface KitInputWrapperThemeStyled {
    colors: {
        typography: {
            default: string;
            disabled: string;
            warning: string;
            error: string;
        };
    };
    gap: {
        label: number;
        helper: number;
    };
}

export interface KitInputWrapperTheme extends KitInputWrapperThemeStyled {}
