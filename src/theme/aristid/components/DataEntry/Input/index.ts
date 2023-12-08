import {IKitThemeGeneral} from '@theme/types';
import {
    IKitInputTheme,
    IKitInputWrapperTheme,
    IKitInputPasswordCssTokens,
    IKitTextAreaThemeCssTokens,
    IKitInputWrapperCssTokens,
    IKitInputCssTokens
} from '@theme/types/components/DataEntry/Input';
import {generateCssTokens} from '@theme/utils/css-tokens-generator.ts';

const _getKitPasswordTokens = (generalTokens: IKitThemeGeneral): IKitInputTheme['Password'] => {
    const {colors, typography} = generalTokens;

    return {
        colors: {
            background: {
                warning: colors.secondary.orange.orange100,
                error: colors.secondary.red.red100
            },
            prefix: {
                default: colors.secondary.mediumGrey.mediumGrey500,
                disabled: colors.secondary.mediumGrey.mediumGrey400,
                warning: colors.secondary.orange.orange400,
                error: colors.secondary.red.red400
            },
            suffix: {
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
            passwordIcon: {
                default: colors.secondary.mediumGrey.mediumGrey500,
                disabled: colors.secondary.mediumGrey.mediumGrey400,
                warning: colors.secondary.orange.orange500,
                error: colors.secondary.red.red400
            },
            showCount: {
                default: colors.secondary.mediumGrey.mediumGrey300,
                disabled: colors.secondary.mediumGrey.mediumGrey400,
                warning: colors.secondary.orange.orange300,
                error: colors.secondary.red.red300
            },
            border: {
                disabled: colors.secondary.mediumGrey.mediumGrey200,
                warning: colors.secondary.orange.orange400,
                error: colors.secondary.red.red400
            },
            typography: {
                content: {
                    disabled: colors.secondary.mediumGrey.mediumGrey400,
                    warning: colors.secondary.orange.orange500,
                    error: colors.secondary.red.red400
                },
                placeholder: {
                    disabled: colors.secondary.mediumGrey.mediumGrey400,
                    warning: colors.secondary.orange.orange500,
                    error: colors.secondary.red.red400
                }
            }
        },
        typography: {
            content: {
                fontWeight: typography.mediumfontWeight
            },
            placeholder: {
                fontWeight: typography.regularFontWeight
            },
            showCount: {
                fontSize: typography.fontSize7,
                fontWeight: typography.regularFontWeight
            }
        }
    };
};

const _getKitTextAreaTokens = (generalTokens: IKitThemeGeneral): IKitInputTheme['TextArea'] => {
    const {colors, typography} = generalTokens;

    return {
        colors: {
            background: {
                warning: colors.secondary.orange.orange100,
                error: colors.secondary.red.red100
            },
            prefix: {
                default: colors.secondary.mediumGrey.mediumGrey500,
                disabled: colors.secondary.mediumGrey.mediumGrey400,
                warning: colors.secondary.orange.orange400,
                error: colors.secondary.red.red400
            },
            suffix: {
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
            showCount: {
                default: colors.secondary.mediumGrey.mediumGrey300,
                disabled: colors.secondary.mediumGrey.mediumGrey400,
                warning: colors.secondary.orange.orange300,
                error: colors.secondary.red.red300
            },
            border: {
                disabled: colors.secondary.mediumGrey.mediumGrey200,
                warning: colors.secondary.orange.orange400,
                error: colors.secondary.red.red400
            },
            typography: {
                content: {
                    disabled: colors.secondary.mediumGrey.mediumGrey400,
                    warning: colors.secondary.orange.orange500,
                    error: colors.secondary.red.red400
                },
                placeholder: {
                    disabled: colors.secondary.mediumGrey.mediumGrey400,
                    warning: colors.secondary.orange.orange500,
                    error: colors.secondary.red.red400
                }
            }
        },
        typography: {
            content: {
                fontWeight: typography.mediumfontWeight
            },
            placeholder: {
                fontWeight: typography.regularFontWeight
            },
            showCount: {
                fontSize: typography.fontSize7,
                fontWeight: typography.regularFontWeight
            }
        }
    };
};

export const getKitInputTokens = (generalTokens: IKitThemeGeneral): IKitInputTheme => {
    const {colors, typography, border} = generalTokens;

    return {
        colors: {
            background: {
                default: colors.neutral.white,
                disabled: colors.secondary.mediumGrey.mediumGrey100,
                warning: colors.secondary.orange.orange100,
                error: colors.secondary.red.red100
            },
            prefix: {
                default: colors.secondary.mediumGrey.mediumGrey500,
                disabled: colors.secondary.mediumGrey.mediumGrey400,
                warning: colors.secondary.orange.orange400,
                error: colors.secondary.red.red400
            },
            suffix: {
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
            showCount: {
                default: colors.secondary.mediumGrey.mediumGrey300,
                disabled: colors.secondary.mediumGrey.mediumGrey400,
                warning: colors.secondary.orange.orange300,
                error: colors.secondary.red.red300
            },
            border: {
                default: colors.secondary.mediumGrey.mediumGrey200,
                disabled: colors.secondary.mediumGrey.mediumGrey200,
                warning: colors.secondary.orange.orange400,
                error: colors.secondary.red.red400,
                hover: colors.primary.primary400
            },
            typography: {
                content: {
                    default: colors.primary.primary300,
                    disabled: colors.secondary.mediumGrey.mediumGrey400,
                    warning: colors.secondary.orange.orange500,
                    error: colors.secondary.red.red400
                },
                placeholder: {
                    default: colors.secondary.mediumGrey.mediumGrey500,
                    disabled: colors.secondary.mediumGrey.mediumGrey400,
                    warning: colors.secondary.orange.orange500,
                    error: colors.secondary.red.red400
                }
            }
        },
        border: {
            radius: border.radius.s
        },
        typography: {
            fontFamily: typography.fontFamily,
            fontSize: typography.fontSize5,
            content: {
                fontWeight: typography.mediumfontWeight
            },
            placeholder: {
                fontWeight: typography.regularFontWeight
            },
            showCount: {
                fontSize: typography.fontSize7,
                fontWeight: typography.regularFontWeight
            }
        },
        Password: _getKitPasswordTokens(generalTokens),
        TextArea: _getKitTextAreaTokens(generalTokens)
    };
};

export const getKitInputWrapperTokens = (generalTokens: IKitThemeGeneral): IKitInputWrapperTheme => {
    const {colors, spacing} = generalTokens;

    return {
        colors: {
            typography: {
                default: colors.secondary.mediumGrey.mediumGrey500,
                disabled: colors.secondary.mediumGrey.mediumGrey400,
                warning: colors.secondary.orange.orange400,
                error: colors.secondary.red.red400
            }
        },
        gap: {
            label: spacing.xs,
            helper: spacing.xs
        }
    };
};

export const kitInputPasswordCssTokens = generateCssTokens<IKitInputPasswordCssTokens>('--components-Input-Password', {
    colors: {
        background: {error: '', warning: ''},
        border: {disabled: '', error: '', warning: ''},
        clearIcon: {default: '', disabled: '', error: '', warning: ''},
        passwordIcon: {default: '', disabled: '', error: '', warning: ''},
        prefix: {default: '', disabled: '', error: '', warning: ''},
        showCount: {default: '', disabled: '', error: '', warning: ''},
        suffix: {default: '', disabled: '', error: '', warning: ''},
        typography: {
            content: {disabled: '', error: '', warning: ''},
            placeholder: {disabled: '', error: '', warning: ''}
        }
    },
    typography: {
        content: {fontWeight: ''},
        placeholder: {fontWeight: ''},
        showCount: {fontSize: '', fontWeight: ''}
    }
});

export const kitInputWrapperCssTokens = generateCssTokens<IKitInputWrapperCssTokens>('--components-InputWrapper', {
    colors: {
        typography: {
            default: '',
            disabled: '',
            warning: '',
            error: ''
        }
    },
    gap: {
        label: '',
        helper: ''
    }
});

export const kitTextAreaCssTokens = generateCssTokens<IKitTextAreaThemeCssTokens>('--components-Input-TextArea', {
    colors: {
        background: {
            warning: '',
            error: ''
        },
        prefix: {
            default: '',
            disabled: '',
            warning: '',
            error: ''
        },
        suffix: {
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
        showCount: {
            default: '',
            disabled: '',
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
        content: {
            fontWeight: ''
        },
        placeholder: {
            fontWeight: ''
        },
        showCount: {
            fontSize: '',
            fontWeight: ''
        }
    }
});

export const kitInputCssTokens = generateCssTokens<IKitInputCssTokens>('--components-Input', {
    border: {radius: ''},
    colors: {
        background: {default: '', disabled: '', error: '', warning: ''},
        border: {default: '', disabled: '', error: '', hover: '', warning: ''},
        clearIcon: {default: '', disabled: '', error: '', warning: ''},
        prefix: {default: '', disabled: '', error: '', warning: ''},
        showCount: {default: '', disabled: '', error: '', warning: ''},
        suffix: {default: '', disabled: '', error: '', warning: ''},
        typography: {
            content: {default: '', disabled: '', error: '', warning: ''},
            placeholder: {default: '', disabled: '', error: '', warning: ''}
        }
    },
    typography: {
        content: {fontWeight: ''},
        fontFamily: '',
        fontSize: '',
        placeholder: {fontWeight: ''},
        showCount: {fontSize: '', fontWeight: ''}
    }
});
