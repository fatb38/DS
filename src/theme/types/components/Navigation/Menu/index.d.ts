export interface KitMenuThemeStyled {
    colors: {
        background: {
            default: string;
        };
    };
    itemMenu: {
        colors: {
            background: {
                default: string;
                active: string;
                hover: string;
                danger: string;
            };
            border: {
                active: string;
            };
            value: {
                default: string;
            };
            rafter: {
                default: string;
                hover: string;
            };
            title: {
                default: string;
                danger: string;
            };
            icon: {
                default: string;
                danger: string;
            };
        };
    };
}

export type KitMenuTheme = KitMenuThemeStyled;
