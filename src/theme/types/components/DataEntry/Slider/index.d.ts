export interface KitSliderThemeAntd {
    rail: {
        colors: {
            background: {
                default: string;
                hover: string;
            };
        };
        size: number;
    };
    handle: {
        colors: {
            default: string;
        };
        size: number;
        border: number;
    };
    track: {
        colors: {
            background: {
                default: string;
                hover: string;
            };
        };
    };
    dot: {
        colors: {
            border: {
                default: string;
                active: string;
            };
        };
        size: number;
    };
}

export interface KitSliderStyled {
    handle: {
        colors: {
            background: {
                hover: string;
                focus: string;
            };
            border: {
                default: string;
                disabled: string;
            };
        };
    };
    dot: {
        colors: {
            border: {
                default: string;
            };
        };
    };
    startIcon: {
        colors: {
            default: string;
        };
    };
    endIcon: {
        colors: {
            default: string;
        };
    };
}

export type KitSliderTheme = KitSliderThemeAntd & KitSliderStyled;
