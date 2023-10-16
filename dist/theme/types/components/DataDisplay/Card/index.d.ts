export interface KitCardThemeStyled {
    card: {
        colors: {
            background: {
                default: string;
                disabled: string;
            };
            border: {
                default: string;
                hover: string;
            };
        };
        border: {
            radius: number;
        };
        typography: {
            fontFamily: string;
        };
    };
    colorBar: {
        thickness: number;
        border: {
            radius: number;
        };
    };
    select: {
        colors: {
            background: {
                disabled: string;
            };
            typography: {
                default: string;
                disabled: string;
            };
        };
    };
    expend: {
        colors: {
            typography: {
                default: string;
                hover: string;
            };
        };
    };
    image: {
        colors: {
            border: {
                default: string;
            };
        };
        border: {
            radius: number;
        };
    };
    icon: {
        colors: {
            border: {
                default: string;
            };
        };
        border: {
            radius: number;
        };
    };
    title: {
        colors: {
            typography: {
                default: string;
                disabled: string;
            };
        };
        typography: {
            fontSize: number;
            fontWeight: string | number;
        };
    };
    description: {
        colors: {
            typography: {
                default: string;
                disabled: string;
            };
        };
        typography: {
            fontSize: number;
            fontWeight: string | number;
        };
    };
    footer: {
        colors: {
            typography: {
                default: string;
                disabled: string;
            };
        };
        typography: {
            fontSize: number;
            fontWeight: string | number;
        };
    };
}

export type KitCardTheme = KitCardThemeStyled;
