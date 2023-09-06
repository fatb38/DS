export interface KitRateThemeAntd {
    colors: {
        star: {
            active: {
                default: string;
            };
        };
    };
}

export interface KitRateThemeStyled {
    colors: {
        star: {
            default: string;
            disabled: string;
            active: {
                red: string;
                green: string;
                blue: string;
            };
        };
    };
}

export type KitRateTheme = KitRateThemeAntd & KitRateThemeStyled;
