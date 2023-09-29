export interface KitDropDownThemeStyled {
    colors: {
        background: {
            default: string;
        };
        typography: {
            default: string;
        };
    };
    typography: {
        fontFamily: string;
        fontWeight: number | string;
    };
    menu: {
        colors: {
            background: {
                default: string;
            };
        };
    };
    menuItem: {
        colors: {
            background: {
                active: string;
                selected: string;
                disabled: string;
            };
            typography: {
                default: string;
                active: string;
                disabled: string;
            };
        };
        typography: {
            fontWeight: number | string;
        };
        divider: {
            colors: {
                background: {
                    default: string;
                };
            };
        };
    };
    menuItemGroup: {
        title: {
            colors: {
                typography: {
                    default: string;
                };
            };
            typography: {
                fontSize: number;
                fontWeight: number | string;
            };
        };
    };
    subMenu: {
        colors: {
            background: {
                active: string;
            };
            typography: {
                active: string;
            };
        };
        title: {
            colors: {
                background: {
                    disabled: string;
                };
                typography: {
                    default: string;
                    active: string;
                    disabled: string;
                };
            };
            typography: {
                fontWeight: number | string;
            };
        };
        expIcon: {
            colors: {
                background: {
                    default: string;
                    disabled: string;
                };
                typography: {
                    default: string;
                    active: string;
                    disabled: string;
                };
            };
        };
    };
}

export type KitDropDownTheme = KitDropDownThemeStyled;
