import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {AntdThemeConfigWithRequiredComponents} from '@theme/types';
import {
    KitInputThemeAntd,
    KitInputThemeStyled,
    KitPasswordThemeStyled,
    KitTextAreaThemeStyled
} from '@theme/types/components/DataEntry/Input';
import {KitInputWrapperThemeStyled} from '@theme/types/components/DataEntry/Input';

const {colors, typography, border, spacing} = KitAristidThemeGeneral;

const kitInputThemeAntd: KitInputThemeAntd = {
    colors: {
        background: {
            default: colors.neutral.typography.white,
            disabled: colors.secondary.mediumGrey.mediumGrey100
        },
        border: {
            default: colors.secondary.mediumGrey.mediumGrey200,
            hover: colors.primary.blue400
        },
        typography: {
            content: colors.primary.blue300,
            placeholder: colors.secondary.mediumGrey.mediumGrey500
        }
    },
    border: {
        radius: border.radius.s
    },
    typography: {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize5
    }
};

const kitInputThemeStyled: KitInputThemeStyled = {
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

const kitPasswordThemeStyled: KitPasswordThemeStyled = {
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

const kitTextAreaThemeStyled: KitTextAreaThemeStyled = {
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

const formatKitTokenForAntdDesignTolen = (
    kitInputThemeAntd: KitInputThemeAntd
): AntdThemeConfigWithRequiredComponents['Input'] => {
    const {colors, border, typography} = kitInputThemeAntd;

    return {
        colorBgContainer: colors.background.default,
        colorBgContainerDisabled: colors.background.disabled,
        colorBorder: colors.border.default,
        colorPrimaryHover: colors.border.hover,
        colorTextPlaceholder: colors.typography.placeholder,
        colorText: colors.typography.content,
        borderRadius: border.radius,
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize
    };
};

export const KitInputTheme = {
    ...formatKitTokenForAntdDesignTolen(kitInputThemeAntd),
    ...kitInputThemeStyled,
    Password: {
        ...kitPasswordThemeStyled
    },
    TextArea: {
        ...kitTextAreaThemeStyled
    }
};

const kitInputWrapperStyled: KitInputWrapperThemeStyled = {
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

export const KitInputWrapperTheme = {
    ...kitInputWrapperStyled
};
