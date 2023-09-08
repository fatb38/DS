export interface KitAvatarThemeStyled {
    colors: {
        background: {
            default: string;
            blueInvert: string;
        };
        typography: {
            default: string;
            blueInvert: string;
        };
    };
}

export type KitAvatarTheme = KitAvatarThemeStyled;

export interface KitAvatarGroupThemeStyled {
    colors: {
        background: {
            default: string;
        };
        typography: {
            default: string;
        };
    };
}

export type KitAvatarGroupTheme = KitAvatarGroupThemeStyled;
