import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitInputTheme, IKitInputWrapperTheme} from '@theme/types/components/DataEntry/Input';

const {colors, typography, border, spacing} = KitAristidThemeGeneral;

const kitPasswordTheme: IKitInputTheme['Password'] = {
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

const kitTextAreaTheme: IKitInputTheme['TextArea'] = {
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

export const KitInputTheme: IKitInputTheme = {
    colors: {
        background: {
            default: colors.neutral.typography.white,
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
            hover: colors.primary.blue400
        },
        typography: {
            content: {
                default: colors.primary.blue300,
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
    Password: kitPasswordTheme,
    TextArea: kitTextAreaTheme
};

export const KitInputWrapperTheme: IKitInputWrapperTheme = {
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
