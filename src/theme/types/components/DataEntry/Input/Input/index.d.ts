export interface KitInputThemeAntd {
    colors: {
        background: {
            default: string;
            disabled: string;
        };
        border: {
            default: string;
            hover: string;
        };
        typography: {
            content: string;
            placeholder: string;
        };
    };
    border: {
        radius: number;
    };
    typography: {
        fontFamily: string;
        fontSize: number;
    };
}

interface KitInputThemeStateColor {
    default: string;
    disabled: string;
    warning: string;
    error: string;
}

interface KitInputThemeColors {
    background: Omit<KitInputThemeStateColor, 'default' | 'disabled'>;
    prefix: KitInputThemeStateColor;
    suffix: KitInputThemeStateColor;
    clearIcon: KitInputThemeStateColor;
    showCount: KitInputThemeStateColor;
    border: Omit<KitInputThemeStateColor, 'default'>;
    typography: {
        content: Omit<KitInputThemeStateColor, 'default'>;
        placeholder: Omit<KitInputThemeStateColor, 'default'>;
    };
}

interface KitInputThemeTypography {
    content: {
        fontWeight: string | number;
    };
    placeholder: {
        fontWeight: string | number;
    };
    showCount: {
        fontSize: number;
        fontWeight: string | number;
    };
}

export interface KitInputThemeStyled {
    colors: KitInputThemeColors;
    typography: KitInputThemeTypography;
}

export interface KitPasswordThemeStyled {
    colors: KitInputThemeColors & {
        passwordIcon: KitInputThemeStateColor;
    };
    typography: KitInputThemeTypography;
}

export interface KitTextAreaThemeStyled {
    colors: KitInputThemeColors;
    typography: KitInputThemeTypography;
}

export type KitInputTheme = KitInputThemeAntd & {
    Input: KitInputThemeStyled;
    Password: KitPasswordThemeStyled;
    TextArea: KitTextAreaThemeStyled;
};
