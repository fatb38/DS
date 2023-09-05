export interface KitTooltipThemeAntd {
    colors: {
        background: {
            default: string;
        };
        typography: {
            default: string;
        };
    };
    typography: {
        fontFamily: string;
        fontSize: number;
    };
}

export interface KitTooltipTheme extends KitTooltipThemeAntd {}
