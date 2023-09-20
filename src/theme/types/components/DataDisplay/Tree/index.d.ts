export interface KitTreeThemeAntd {
    colors: {
        background: {
            hover: string;
        };
    };
    typography: {
        fontFamily: string;
        fontSize: number;
    };
    icon: {
        fontSize: number;
    };
}

export interface KitTreeThemeStyled {
    checkbox: {
        colors: {
            background: {
                default: string;
                disabled: string;
                checked: {
                    default: string;
                    hover: string;
                };
            };
            border: {
                default: string;
                disabled: string;
                hover: string;
                checked: {
                    default: string;
                    hover: string;
                };
            };
            icon: {
                default: string;
                disabled: string;
                checked: string;
            };
        };
    };
    treenode: {
        typography: {
            fontWeight: string | number;
        };
        colors: {
            typography: {
                hover: string;
                disabled: string;
            };
            background: {
                hover: string;
                selected: string;
                indent: string;
            };
        };
    };
}

export type KitTreeTheme = KitTreeThemeAntd & KitTreeThemeStyled;
