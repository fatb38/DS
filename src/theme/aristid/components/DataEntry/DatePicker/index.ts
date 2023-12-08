import {IKitThemeGeneral} from '@theme/types';
import {IKitDatePickerCssTokens, IKitDatePickerTheme} from '@theme/types/components/DataEntry/DatePicker';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const getKitDatePickerTokens = (generalTokens: IKitThemeGeneral): IKitDatePickerTheme => {
    const {colors, typography, border} = generalTokens;

    return {
        colors: {
            icon: {
                default: colors.secondary.mediumGrey.mediumGrey500,
                disabled: colors.secondary.mediumGrey.mediumGrey400,
                warning: colors.secondary.orange.orange400,
                error: colors.secondary.red.red400
            },
            clearIcon: {
                default: colors.secondary.mediumGrey.mediumGrey500,
                disabled: colors.secondary.mediumGrey.mediumGrey400,
                warning: colors.secondary.orange.orange500,
                error: colors.secondary.red.red400
            },
            background: {
                default: colors.neutral.white,
                disabled: colors.secondary.mediumGrey.mediumGrey100,
                warning: colors.secondary.orange.orange100,
                error: colors.secondary.red.red100
            },
            border: {
                default: colors.secondary.mediumGrey.mediumGrey200,
                hover: colors.primary.primary400,
                active: colors.primary.primary400,
                disabled: colors.secondary.mediumGrey.mediumGrey200,
                warning: colors.secondary.orange.orange400,
                error: colors.secondary.red.red400
            },
            link: {
                default: colors.primary.primary400,
                hover: colors.primary.primary500
            },
            item: {
                hover: colors.secondary.mediumGrey.mediumGrey100,
                active: colors.primary.primary100
            },
            typography: {
                content: {
                    default: colors.primary.primary300,
                    disabled: colors.secondary.mediumGrey.mediumGrey400,
                    warning: colors.secondary.orange.orange400,
                    error: colors.secondary.red.red400
                },
                placeholder: {
                    default: colors.secondary.mediumGrey.mediumGrey500,
                    disabled: colors.secondary.mediumGrey.mediumGrey400,
                    warning: colors.secondary.orange.orange400,
                    error: colors.secondary.red.red400
                }
            }
        },
        typography: {
            fontFamily: typography.fontFamily,
            fontSize: typography.fontSize5,
            fontWeight: {
                content: typography.mediumfontWeight,
                placeholder: typography.regularFontWeight
            }
        },
        border: {
            radius: border.radius.s
        },
        RangePicker: {
            colors: {
                separator: {
                    default: colors.secondary.mediumGrey.mediumGrey500,
                    disabled: colors.secondary.mediumGrey.mediumGrey400,
                    warning: colors.secondary.orange.orange300,
                    error: colors.secondary.red.red300
                },
                icon: {
                    default: colors.secondary.mediumGrey.mediumGrey500,
                    disabled: colors.secondary.mediumGrey.mediumGrey400,
                    warning: colors.secondary.orange.orange400,
                    error: colors.secondary.red.red400
                },
                clearIcon: {
                    default: colors.secondary.mediumGrey.mediumGrey500,
                    disabled: colors.secondary.mediumGrey.mediumGrey400,
                    warning: colors.secondary.orange.orange500,
                    error: colors.secondary.red.red400
                },
                background: {
                    warning: colors.secondary.orange.orange100,
                    error: colors.secondary.red.red100
                },
                border: {
                    disabled: colors.secondary.mediumGrey.mediumGrey200,
                    warning: colors.secondary.orange.orange400,
                    error: colors.secondary.red.red400
                },
                typography: {
                    content: {
                        disabled: colors.secondary.mediumGrey.mediumGrey400,
                        warning: colors.secondary.orange.orange400,
                        error: colors.secondary.red.red400
                    },
                    placeholder: {
                        disabled: colors.secondary.mediumGrey.mediumGrey400,
                        warning: colors.secondary.orange.orange400,
                        error: colors.secondary.red.red400
                    }
                }
            },
            typography: {
                fontFamily: typography.fontFamily,
                fontWeight: {
                    content: typography.mediumfontWeight,
                    placeholder: typography.regularFontWeight
                }
            }
        },
        DropDown: {
            colors: {
                button: {
                    now: {
                        typography: {
                            default: colors.primary.primary400,
                            hover: colors.primary.primary500
                        }
                    },
                    ok: {
                        typography: {
                            default: colors.neutral.typography.white,
                            disabled: colors.primary.primary200
                        },
                        background: {
                            default: colors.primary.primary400,
                            hover: colors.primary.primary500,
                            active: colors.primary.primary600,
                            disabled: colors.primary.primary100
                        },
                        border: {
                            default: colors.primary.primary400,
                            hover: colors.primary.primary500,
                            active: colors.primary.primary600,
                            disabled: colors.primary.primary100
                        }
                    }
                }
            }
        }
    };
};

export const kitDatePickerCssTokens = generateCssTokens<IKitDatePickerCssTokens>('--components-DatePicker', {
    colors: {
        icon: {
            default: '',
            disabled: '',
            warning: '',
            error: ''
        },
        clearIcon: {
            default: '',
            disabled: '',
            warning: '',
            error: ''
        },
        background: {
            default: '',
            disabled: '',
            warning: '',
            error: ''
        },
        border: {
            default: '',
            hover: '',
            active: '',
            disabled: '',
            warning: '',
            error: ''
        },
        link: {
            default: '',
            hover: ''
        },
        item: {
            hover: '',
            active: ''
        },
        typography: {
            content: {
                default: '',
                disabled: '',
                warning: '',
                error: ''
            },
            placeholder: {
                default: '',
                disabled: '',
                warning: '',
                error: ''
            }
        }
    },
    typography: {
        fontFamily: '',
        fontSize: '',
        fontWeight: {
            content: '',
            placeholder: ''
        }
    },
    border: {
        radius: ''
    },
    RangePicker: {
        colors: {
            separator: {
                default: '',
                disabled: '',
                warning: '',
                error: ''
            },
            icon: {
                default: '',
                disabled: '',
                warning: '',
                error: ''
            },
            clearIcon: {
                default: '',
                disabled: '',
                warning: '',
                error: ''
            },
            background: {
                warning: '',
                error: ''
            },
            border: {
                disabled: '',
                warning: '',
                error: ''
            },
            typography: {
                content: {
                    disabled: '',
                    warning: '',
                    error: ''
                },
                placeholder: {
                    disabled: '',
                    warning: '',
                    error: ''
                }
            }
        },
        typography: {
            fontFamily: '',
            fontWeight: {
                content: '',
                placeholder: ''
            }
        }
    },
    DropDown: {
        colors: {
            button: {
                now: {
                    typography: {
                        default: '',
                        hover: ''
                    }
                },
                ok: {
                    background: {
                        default: '',
                        hover: '',
                        active: '',
                        disabled: ''
                    },
                    border: {
                        default: '',
                        hover: '',
                        active: '',
                        disabled: ''
                    },
                    typography: {
                        default: '',
                        disabled: ''
                    }
                }
            }
        }
    }
});
