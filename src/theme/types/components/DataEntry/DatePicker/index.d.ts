export interface KitDatePickerThemeAntd {
    colors: {
        background: {
            default: string;
            disabled: string;
        };
        border: {
            default: string;
            hover: string;
            active: string;
        };
        typography: {
            content: {
                default: string;
            };
            placeholder: {
                default: string;
            };
        };
        link: {
            default: string;
            hover: string;
        };
        item: {
            hover: string;
            active: string;
        };
    };
    typography: {
        fontFamily: string;
        fontSize: number;
    };
    border: {
        radius: number;
    };
}

export interface KitDatePickerThemeStyled {
    colors: {
        icon: {
            default: string;
            disabled: string;
            warning: string;
            error: string;
        };
        clearIcon: {
            default: string;
            disabled: string;
            warning: string;
            error: string;
        };
        background: {
            warning: string;
            error: string;
        };
        border: {
            disabled: string;
            warning: string;
            error: string;
        };
        typography: {
            content: {
                disabled: string;
                warning: string;
                error: string;
            };
            placeholder: {
                disabled: string;
                warning: string;
                error: string;
            };
        };
    };
    typography: {
        fontFamily: string;
        fontWeight: {
            content: string | number;
            placeholder: string | number;
        };
    };
    RangePicker: {
        colors: {
            separator: {
                default: string;
                disabled: string;
                warning: string;
                error: string;
            };
            icon: {
                default: string;
                disabled: string;
                warning: string;
                error: string;
            };
            clearIcon: {
                default: string;
                disabled: string;
                warning: string;
                error: string;
            };
            background: {
                warning: string;
                error: string;
            };
            border: {
                disabled: string;
                warning: string;
                error: string;
            };
            typography: {
                content: {
                    disabled: string;
                    warning: string;
                    error: string;
                };
                placeholder: {
                    disabled: string;
                    warning: string;
                    error: string;
                };
            };
        };
        typography: {
            fontFamily: string;
            fontWeight: {
                content: string | number;
                placeholder: string | number;
            };
        };
    };
    DropDown: {
        colors: {
            button: {
                now: {
                    typography: {
                        default: string;
                        hover: string;
                    };
                };
                ok: {
                    background: {
                        default: string;
                        hover: string;
                        active: string;
                        disabled: string;
                    };
                    border: {
                        default: string;
                        hover: string;
                        active: string;
                        disabled: string;
                    };
                    typography: {
                        default: string;
                        disabled: string;
                    };
                };
            };
        };
    };
}

export type KitDatePickerTheme = KitDatePickerThemeAntd & KitDatePickerThemeStyled;
