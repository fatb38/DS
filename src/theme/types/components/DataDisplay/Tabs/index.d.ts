export interface IKitTabsTheme {
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
            s: number;
            m: number;
            l: number;
        };
        colors: {
            disabled: string;
            active: string;
            hover: string;
            selected: string;
        };
    };
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
    DropDown: {
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
        };
    };
}
