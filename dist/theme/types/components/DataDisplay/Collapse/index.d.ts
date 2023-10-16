export interface KitCollapseThemeAntd {
    colors: {
        background: {
            default: string;
        };
        border: {
            default: string;
        };
    };
    border: {
        radius: number;
    };
}

export interface KitCollapseThemeStyled {
    colors: {
        background: {
            active: string;
        };
        border: {
            active: string;
        };
    };
    border: {
        radius: number;
    };
}

export type KitCollapseTheme = KitCollapseThemeAntd & KitCollapseThemeStyled;
