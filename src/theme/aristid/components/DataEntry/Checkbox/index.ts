import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {AntdThemeConfigWithRequiredComponents} from '@theme/types';
import {KitCheckboxThemeAntd, KitCheckboxThemeStyled} from '@theme/types/components/DataEntry/Checkbox';

const {colors, typography, border} = KitAristidThemeGeneral;

const kitCheckboxThemeAntd: KitCheckboxThemeAntd = {
    typography: {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize5,
        lineHeight: typography.lineHeight5,
        lineWidth: 1
    },
    border: {
        radius: border.radius.xs
    },
    colors: {
        border: {
            default: colors.neutral.typography.black60
        },
        background: {
            check: colors.primary.blue400,
            hover: colors.primary.blue500
        }
    }
};

const kitCheckboxThemeStyled: KitCheckboxThemeStyled = {
    colors: {
        background: {
            check: colors.primary.blue400,
            hover: colors.primary.blue500,
            focus: colors.neutral.typography.white,
            disabled: colors.secondary.mediumGrey.mediumGrey100,
            danger: {
                default: colors.secondary.red.red200,
                hover: colors.secondary.red.red500
            }
        },
        border: {
            check: colors.primary.blue400,
            hover: colors.primary.blue400,
            focus: colors.primary.blue400,
            disabled: colors.secondary.mediumGrey.mediumGrey200,
            danger: {
                default: colors.secondary.red.red400,
                hover: colors.secondary.red.red500,
                focus: colors.secondary.red.red400
            }
        },
        typography: {
            disabled: colors.secondary.mediumGrey.mediumGrey400,
            danger: {
                disabled: colors.secondary.red.red200
            }
        }
    },
    typography: {
        fontWeight: typography.mediumfontWeight
    }
};

const formatKitTokenForAntdDesignTolen = (
    kitCheckboxThemeAntd: KitCheckboxThemeAntd
): AntdThemeConfigWithRequiredComponents['Checkbox'] => {
    const {colors, typography, border} = kitCheckboxThemeAntd;

    return {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize,
        fontSizeLG: typography.fontSize,
        lineHeight: typography.lineHeight,
        lineWidth: typography.lineWidth,
        borderRadiusSM: border.radius,
        colorBorder: colors.border.default,
        colorPrimary: colors.background.check,
        colorPrimaryHover: colors.background.hover
    };
};

export const KitCheckboxTheme = {
    ...formatKitTokenForAntdDesignTolen(kitCheckboxThemeAntd),
    ...kitCheckboxThemeStyled
};
