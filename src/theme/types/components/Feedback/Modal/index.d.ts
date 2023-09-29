export interface KitModalThemeStyled {
    typography: {
        fontFamily: string;
        fontSize: {
            title: number;
            content: number;
        };
        fontWeight: {
            title: string | number;
            content: string | number;
        };
    };
    shadow: string;
    spacing: {
        vertical: {
            items: number;
            text: number;
        };
    };
    border: {
        radius: number;
    };
    colors: {
        background: {
            default: string;
            info: string;
            success: string;
            warning: string;
            error: string;
        };
        icon: {
            info: string;
            success: string;
            warning: string;
            error: string;
        };
    };
    Overlay: {
        colors: {
            background: {
                default: string;
            };
        };
    };
}

export type KitModalTheme = KitModalThemeStyled;
