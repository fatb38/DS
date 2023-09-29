export interface KitAlertThemeAntd {
    colors: {
        border: {
            success: string;
            info: string;
            warning: string;
            error: string;
        };
        background: {
            success: string;
            info: string;
            warning: string;
            error: string;
        };
        typography: {
            default: string;
        };
    };
    typography: {
        fontFamily: string;
    };
}

export interface KitAlertThemeStyled {
    border: {
        radius: number;
    };
    typography: {
        fontSize: {
            message: number;
            description: number;
        };
    };
    icon: {
        alert: {
            size: number;
        };
        close: {
            size: number;
        };
    };
    colors: {
        icon: {
            alert: {
                success: string;
                info: string;
                warning: string;
                error: string;
            };
        };
    };
}

export type KitAlertTheme = KitAlertThemeAntd & KitAlertThemeStyled;
