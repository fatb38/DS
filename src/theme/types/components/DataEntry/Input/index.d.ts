interface IKitInputThemeStateColor {
    /**
     * default color
     * @TJS-type color
     */
    default: string;
    /**
     * disabled color
     * @TJS-type color
     */
    disabled: string;
    /**
     * warning color
     * @TJS-type color
     */
    warning: string;
    /**
     * error color
     * @TJS-type color
     */
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

interface IKitPasswordThemeColors extends Omit<IKitInputThemeColors, 'background'> {
    background: Omit<IKitInputThemeStateColor, 'default' | 'disabled'>;
}

interface IKitTextAreaThemeColors extends Omit<IKitInputThemeColors, 'background'> {
    background: Omit<IKitInputThemeStateColor, 'default' | 'disabled'>;
}

interface IKitInputThemeTypography {
    content: {
        /**
         * @minimum 0
         * @TJS-type number
         */
        fontWeight: string | number;
    };
    placeholder: {
        /**
         * @minimum 0
         * @TJS-type number
         */
        fontWeight: string | number;
    };
    showCount: {
        /**
         * @minimum 0
         * @TJS-type number
         */
        fontSize: number;
        /**
         * @minimum 0
         * @TJS-type number
         */
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
        /**
         * @minimum 0
         * @TJS-type number
         */
        radius: number;
    };
    typography: IKitInputThemeTypography & {
        fontFamily: string;
        /**
         * @minimum 0
         * @TJS-type number
         */
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
            /**
             * default color
             * @TJS-type color
             */
            default: string;
            /**
             * default color
             * @TJS-type color
             */
            disabled: string;
            /**
             * default color
             * @TJS-type color
             */
            warning: string;
            /**
             * default color
             * @TJS-type color
             */
            error: string;
        };
    };
    gap: {
        /**
         * @minimum 0
         * @TJS-type number
         */
        label: number;
        /**
         * @minimum 0
         * @TJS-type number
         */
        helper: number;
    };
}

export interface IKitInputPasswordCssTokens {
    colors: {
        background: {
            warning: string;
            error: string;
        };
        prefix: {
            default: string;
            disabled: string;
            warning: string;
            error: string;
        };
        suffix: {
            default: string;
            disabled: string;
            warning: string;
            error: string;
        };
        clearIcon: {
            default: string;
            disabled: string;
            warning: string;
            error: string;
        };
        passwordIcon: {
            default: string;
            disabled: string;
            warning: string;
            error: string;
        };
        showCount: {
            default: string;
            disabled: string;
            warning: string;
            error: string;
        };
        border: {
            disabled: string;
            warning: string;
            error: string;
            focus: {
                default: string;
                warning: string;
                error: string;
            };
        };
        typography: {
            content: {
                disabled: string;
                warning: string;
                error: string;
            };
            placeholder: {
                disabled: string;
                warning: string;
                error: string;
            };
        };
    };
    typography: {
        content: {
            fontWeight: string;
        };
        placeholder: {
            fontWeight: string;
        };
        showCount: {
            fontSize: string;
            fontWeight: string;
        };
    };
}

export interface IKitTextAreaThemeCssTokens {
    colors: {
        background: {
            warning: string;
            error: string;
        };
        prefix: {
            default: string;
            disabled: string;
            warning: string;
            error: string;
        };
        suffix: {
            default: string;
            disabled: string;
            warning: string;
            error: string;
        };
        clearIcon: {
            default: string;
            disabled: string;
            warning: string;
            error: string;
        };
        showCount: {
            default: string;
            disabled: string;
            warning: string;
            error: string;
        };
        border: {
            disabled: string;
            warning: string;
            error: string;
            focus: {
                default: string;
                warning: string;
                error: string;
            };
        };
        typography: {
            content: {
                disabled: string;
                warning: string;
                error: string;
            };
            placeholder: {
                disabled: string;
                warning: string;
                error: string;
            };
        };
    };
    typography: {
        content: {
            fontWeight: string;
        };
        placeholder: {
            fontWeight: string;
        };
        showCount: {
            fontSize: string;
            fontWeight: string;
        };
    };
}

export interface IKitInputCssTokens {
    colors: {
        background: {
            default: string;
            disabled: string;
            warning: string;
            error: string;
        };
        prefix: {
            default: string;
            disabled: string;
            warning: string;
            error: string;
        };
        suffix: {
            default: string;
            disabled: string;
            warning: string;
            error: string;
        };
        clearIcon: {
            default: string;
            disabled: string;
            warning: string;
            error: string;
        };
        showCount: {
            default: string;
            disabled: string;
            warning: string;
            error: string;
        };
        border: {
            default: string;
            disabled: string;
            warning: string;
            error: string;
            hover: string;
            focus: {
                default: string;
                warning: string;
                error: string;
            };
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
    };
    border: {
        radius: string;
    };
    typography: {
        content: {
            fontWeight: string;
        };
        placeholder: {
            fontWeight: string;
        };
        showCount: {
            fontSize: string;
            fontWeight: string;
        };
        fontFamily: string;
        fontSize: string;
    };
}

export interface IKitInputWrapperCssTokens {
    colors: {
        typography: {
            default: string;
            disabled: string;
            warning: string;
            error: string;
        };
    };
    gap: {
        label: string;
        helper: string;
    };
}
