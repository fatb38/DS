export interface KitBreadcrumbThemeStyled {
    link: {
        colors: {
            typography: {
                default: string;
            };
        };
        typography: {
            fontFamily: string;
            fontWeight: number | string;
        };
    };
}

export type KitBreadcrumbTheme = KitBreadcrumbThemeStyled;
