export interface KitSwitchThemeStyled {
    colors: {
        background: {
            default: {
                on: string;
                off: string;
            };
            disabled: string;
        };
        handle: {
            background: {
                default: {
                    on: string;
                    off: string;
                };
                disabled: string;
            };
            border: {
                default: {
                    on: string;
                    off: string;
                };
                disabled: string;
            };
        };
    };
}

export type KitSwitchTheme = KitSwitchThemeStyled;
