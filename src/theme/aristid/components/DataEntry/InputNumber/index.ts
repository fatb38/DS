import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {AntdThemeConfigWithRequiredComponents} from '@theme/types';
import {KitInputNumberThemeAntd, KitInputNumberThemeStyled} from '@theme/types/components/DataEntry/InputNumber';

const {colors, typography, border} = KitAristidThemeGeneral;

const kitInputNumberThemeAntd: KitInputNumberThemeAntd = {
    colors: {
        background: {
            default: colors.neutral.typography.white,
            disabled: colors.secondary.mediumGrey.mediumGrey100
        },
        typography: {
            content: colors.primary.blue300,
            placeholder: colors.secondary.mediumGrey.mediumGrey500
        },
        border: {
            default: colors.secondary.mediumGrey.mediumGrey200,
            hover: colors.primary.blue400
        }
    },
    typography: {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize5
    },
    border: {
        radius: border.radius.s
    }
};

const kitInputNumberThemeStyled: KitInputNumberThemeStyled = {
    typography: {
        content: {
            fontWeight: typography.mediumfontWeight
        },
        placeholder: {
            fontWeight: typography.regularFontWeight
        }
    },
    border: {
        radius: border.radius.s
    },
    colors: {
        border: {
            focused: colors.primary.blue400,
            disabled: colors.secondary.mediumGrey.mediumGrey200,
            error: colors.secondary.red.red400,
            warning: colors.secondary.orange.orange400
        },
        typography: {
            content: {
                disabled: colors.secondary.mediumGrey.mediumGrey400,
                error: colors.secondary.red.red400,
                warning: colors.secondary.orange.orange400
            },
            placeholder: {
                disabled: colors.secondary.mediumGrey.mediumGrey400,
                error: colors.secondary.red.red400,
                warning: colors.secondary.orange.orange400
            }
        },
        prefix: {
            default: colors.secondary.mediumGrey.mediumGrey500,
            disabled: colors.secondary.mediumGrey.mediumGrey400,
            error: colors.secondary.red.red400,
            warning: colors.secondary.orange.orange400
        },
        background: {
            error: colors.secondary.red.red100,
            warning: colors.secondary.orange.orange100
        }
    }
};

const formatKitTokenForAntdDesignTolen = (
    kitInputNumberThemeAntd: KitInputNumberThemeAntd
): AntdThemeConfigWithRequiredComponents['InputNumber'] => {
    const {colors, typography, border} = kitInputNumberThemeAntd;

    return {
        colorBgContainer: colors.background.default,
        colorBgContainerDisabled: colors.background.disabled,
        colorBorder: colors.border.default,
        colorPrimary: colors.border.hover,
        colorPrimaryHover: colors.border.hover,
        colorTextPlaceholder: colors.typography.placeholder,
        colorText: colors.typography.content,
        borderRadius: border.radius,
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize
    };
};

export const KitInputNumberTheme = {
    ...formatKitTokenForAntdDesignTolen(kitInputNumberThemeAntd),
    ...kitInputNumberThemeStyled
};
