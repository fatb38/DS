export interface KitTabsThemeAntd {
    card: {
        colors: {
            background: {
                default: string;
            };
            border: {
                default: string;
                active: string;
            };
        };
        border: {
            radius: number;
        };
        padding: string;
    };
    typography: {
        fontFamily: string;
        fontSize: {
            s: string | number;
            m: string | number;
            l: string | number;
        };
        colors: {
            disabled: string;
            active: string;
            hover: string;
            selected: string;
        };
    };
}

export interface KitTabsThemeStyled {
    extraContent: {
        colors: {
            border: {
                default: string;
            };
            typography: {
                default: string;
            };
        };
        border: {
            radius: number;
        };
        padding: string;
        margin: {
            vertical: number;
            horizontal: number;
        };
    };
}

export type KitTabsTheme = KitTabsThemeAntd & KitTabsThemeStyled;
