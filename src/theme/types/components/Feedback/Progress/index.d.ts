export interface KitProgressThemeAntd {
    colors: {
        background: string;
        progress: {
            info: string;
            success: string;
            error: string;
        };
    };
    typography: {
        fontFamily: string;
        fontSize: number;
    };
}

export interface KitProgressThemeStyled {
    circle: {
        typography: {
            fontWeight: string | number;
            fontSize: number;
        };
    };
}

export type KitProgressTheme = KitProgressThemeAntd & KitProgressThemeStyled;
