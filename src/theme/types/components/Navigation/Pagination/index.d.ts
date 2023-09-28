export interface KitPaginationThemeAntd {
    pagination: {
        colors: {
            background: {
                container: {
                    default: string;
                    disabled: string;
                };
            };
        };
        typography: {
            fontFamily: string;
            fontSize: number;
        };
    };
}

export interface KitPaginationThemeStyled {
    pagination: {
        colors: {
            background: {
                default: string;
                hover: string;
            };
            typography: {
                disabledActive: string;
            };
        };
        border: {
            default: string;
            hover: string;
        };
    };
    prevNext: {
        colors: {
            background: {
                default: string;
            };
            border: {
                default: string;
                hover: string;
            };
            typography: {
                hover: string;
            };
        };
        typography: {
            fontSize: number;
        };
    };
    selector: {
        colors: {
            background: {
                default: string;
            };
            border: {
                default: string;
            };
        };
    };
    quickJumper: {
        colors: {
            border: {
                default: string;
            };
        };
    };
}

export type KitPaginationTheme = KitPaginationThemeAntd & KitPaginationThemeStyled;
