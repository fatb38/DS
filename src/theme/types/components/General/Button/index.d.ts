export interface KitButtonThemeAntd {
    typography: {
        fontFamily: string;
        fontSize: number;
        lineHeight: number;
    };
    border: {
        radius: number;
    };
}

interface KitButtonThemeStateColor {
    default: string;
    hover: string;
    active: string;
    focus: string;
    disabled: string;
    danger: {
        default: string;
        hover: string;
        active: string;
        focus: string;
        disabled: string;
    };
}

export interface KitButtonThemeStyled {
    colors: {
        typography: Omit<KitButtonThemeStateColor, 'danger'> & {
            danger: Omit<KitButtonThemeStateColor['danger'], 'hover' | 'active' | 'focus'>;
        } & {
            iconCheck?: string;
            ghost?: string;
        };
        background: KitButtonThemeStateColor & {ghost?: string};
        border: KitButtonThemeStateColor;
    };
    typography: {
        fontWeight: string | number;
        fontSizeBigIcon: number;
    };
    compact: {
        border: {
            radius: number;
        };
    };
}

export type KitButtonTheme = KitButtonThemeAntd & {
    primary: KitButtonThemeStyled;
    default: KitButtonThemeStyled;
    link: KitButtonThemeStyled;
    segmented: KitButtonThemeStyled;
};
