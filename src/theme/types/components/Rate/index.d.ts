export interface KitRateThemeAntdProps {
    starColor: string;
}

export interface KitRateThemeStyledProps {
    starColorPalette: {
        red: string;
        green: string;
        blue: string;
    };
    startDefaultColor: string;
    startDisabledColor: string;
}

export interface KitRateThemeProps extends KitRateThemeAntdProps, KitRateThemeStyledProps {}
