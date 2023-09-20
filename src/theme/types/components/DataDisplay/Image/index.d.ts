export interface KitImageThemeStyled {
    colors: {
        border: {
            none: string;
            default: string;
        };
    };
    border: {
        radius: {
            default: number;
            rounded: number;
        };
    };
}

export type KitImageTheme = KitImageThemeStyled;
