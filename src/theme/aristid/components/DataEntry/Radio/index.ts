import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {AntdThemeConfigWithRequiredComponents} from '@theme/types';
import {KitRadioThemeAntd, KitRadioThemeStyled} from '@theme/types/components/DataEntry/Radio';

const {colors, typography, border} = KitAristidThemeGeneral;

const kitRadioThemeAntd: KitRadioThemeAntd = {
    typography: {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize5,
        lineHeight: typography.lineHeight5
    }
};

const kitRadioThemeStyled: KitRadioThemeStyled = {
    typography: {
        fontWeight: typography.mediumfontWeight
    },
    colors: {
        border: {
            default: colors.neutral.typography.black60,
            checked: colors.primary.blue400,
            hover: colors.primary.blue500,
            disabled: colors.secondary.mediumGrey.mediumGrey200,
            danger: {
                default: colors.secondary.red.red400,
                hover: colors.secondary.red.red500
            }
        },
        background: {
            default: colors.neutral.typography.white,
            checked: colors.neutral.typography.white,
            hover: colors.neutral.typography.white,
            disabled: colors.secondary.mediumGrey.mediumGrey100,
            danger: {
                default: colors.secondary.red.red200,
                hover: colors.secondary.red.red200
            }
        },
        bullet: {
            default: colors.primary.blue400,
            hover: colors.primary.blue500,
            disabled: colors.secondary.mediumGrey.mediumGrey200,
            danger: {
                default: colors.secondary.red.red400,
                hover: colors.secondary.red.red500
            }
        },
        typography: {
            disabled: colors.secondary.mediumGrey.mediumGrey400,
            danger: {
                disabled: colors.secondary.red.red200
            }
        }
    }
};

const formatKitTokenForAntdDesignTolen = (
    kitRadioThemeAntd: KitRadioThemeAntd
): AntdThemeConfigWithRequiredComponents['Radio'] => {
    const {typography} = kitRadioThemeAntd;

    return {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize,
        lineHeight: typography.lineHeight,
        fontSizeLG: KitAristidThemeGeneral.typography.fontSize4
    };
};

export const KitRadioTheme = {
    ...formatKitTokenForAntdDesignTolen(kitRadioThemeAntd),
    ...kitRadioThemeStyled
};
