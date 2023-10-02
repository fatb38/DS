interface IKitInputThemeStateColor {
    default: string;
    disabled: string;
    warning: string;
    error: string;
}

interface IKitInputThemeColors {
    background: IKitInputThemeStateColor;
    prefix: IKitInputThemeStateColor;
    suffix: IKitInputThemeStateColor;
    clearIcon: IKitInputThemeStateColor;
    showCount: IKitInputThemeStateColor;
    border: Omit<IKitInputThemeStateColor, 'default'>;
    typography: {
        content: Omit<IKitInputThemeStateColor, 'default'>;
        placeholder: Omit<IKitInputThemeStateColor, 'default'>;
    };
}

interface IKitPasswordThemeColors extends IKitInputThemeColors {
    background: Omit<IKitInputThemeStateColor, 'default' | 'disabled'>;
}

interface IKitTextAreaThemeColors extends IKitInputThemeColors {
    background: Omit<IKitInputThemeStateColor, 'default' | 'disabled'>;
}

interface IKitInputThemeTypography {
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

export interface IKitInputTheme {
    colors: {
        background: IKitInputThemeStateColor;
        border: IKitInputThemeStateColor & {
            hover: string;
        };
        prefix: IKitInputThemeStateColor;
        suffix: IKitInputThemeStateColor;
        clearIcon: IKitInputThemeStateColor;
        showCount: IKitInputThemeStateColor;
        typography: {
            content: IKitInputThemeStateColor;
            placeholder: IKitInputThemeStateColor;
        };
    };
    border: {
        radius: number;
    };
    typography: IKitInputThemeTypography & {
        fontFamily: string;
        fontSize: number;
    };
    Password: {
        colors: IKitPasswordThemeColors & {
            passwordIcon: IKitInputThemeStateColor;
        };
        typography: IKitInputThemeTypography;
    };
    TextArea: {
        colors: IKitTextAreaThemeColors;
        typography: IKitInputThemeTypography;
    };
}

export interface IKitInputWrapperTheme {
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
