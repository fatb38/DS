import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {AntdThemeConfigWithRequiredComponents} from '@theme/types';
import {KitStepsThemeAntd, KitStepsThemeStyled} from '@theme/types/components/Navigation/Steps';

const {colors, typography} = KitAristidThemeGeneral;

const kitStepsThemeAntd: KitStepsThemeAntd = {
    colors: {
        split: {
            default: colors.neutral.background
        },
        typography: {
            description: {
                default: colors.neutral.typography.black60
            },
            text: {
                default: colors.neutral.typography.black
            }
        }
    },
    typography: {
        fontfamily: typography.fontFamily,
        fontSize: typography.fontSize6
    }
};

const kitStepsThemeStyled: KitStepsThemeStyled = {
    colors: {
        dot: {
            default: colors.primary.blue300
        },
        title: {
            default: colors.primary.blue300
        },
        description: {
            default: colors.primary.blue300
        }
    }
};

const formatKitTokenForAntdDesignTolen = (
    kitStepsThemeAntd: KitStepsThemeAntd
): AntdThemeConfigWithRequiredComponents['Steps'] => {
    const {colors, typography} = kitStepsThemeAntd;

    return {
        fontSize: typography.fontSize,
        fontFamily: typography.fontfamily,
        colorTextDescription: colors.typography.description.default,
        colorText: colors.typography.text.default,
        colorSplit: colors.split.default,
        colorPrimary: KitAristidThemeGeneral.colors.primary.blue400,
        colorError: KitAristidThemeGeneral.colors.secondary.red.red400,
        fontSizeLG: KitAristidThemeGeneral.typography.fontSize5,
        marginSM: KitAristidThemeGeneral.spacing.xs
    };
};

export const KitStepsTheme = {
    ...formatKitTokenForAntdDesignTolen(kitStepsThemeAntd),
    ...kitStepsThemeStyled
};
