export interface KitSelectThemeAntd {
    border: {
        radius: number;
    };
    height: number;
    colors: {
        background: string;
    };
    typography: {
        fontFamily: string;
        fontSize: number;
    };
}

export interface KitSelectThemeStyled {
    colorBadge: {
        height: number;
        width: number;
        border: {
            radius: number;
        };
    };
}

export interface KitSelectDropDownThemeStyled {
    colors: {
        typography: {
            default: string;
            selected: string;
            active: string;
            group: string;
        };
        background: {
            default: string;
            selected: string;
            active: string;
        };
    };
    typography: {
        fontFamily: string;
        fontWeight: {
            default: string | number;
            selected: string | number;
            active: string | number;
            group: string | number;
        };
    };
    border: {
        radius: number;
    };
}

export type KitSelectTheme = KitSelectThemeAntd & {
    Select: KitSelectThemeStyled;
    DropDown: KitSelectDropDownThemeStyled;
};
