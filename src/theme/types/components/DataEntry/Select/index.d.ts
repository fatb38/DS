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

export interface KitSelectThemeStyled {}

export interface KitSelectDropDownThemeStyled {}

export type KitSelectTheme = KitSelectThemeAntd & {
    Select: KitSelectThemeStyled;
    DropDown: KitSelectDropDownThemeStyled;
};
