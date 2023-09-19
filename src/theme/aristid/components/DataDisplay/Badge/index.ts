import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {AntdThemeConfigWithRequiredComponents} from '@theme/types';
import {KitBadgeThemeAntd, KitBadgeThemeStyled} from '@theme/types/components/DataDisplay/Badge';

const {colors, typography} = KitAristidThemeGeneral;

const kitBadgeThemeAntd: KitBadgeThemeAntd = {
    colors: {
        background: {
            primary: colors.primary.blue400,
            error: colors.secondary.red.red400,
            success: colors.secondary.green.green400,
            warning: colors.secondary.yellow.yellow400
        }
    },
    typography: {
        fontFamily: typography.fontFamily
    }
};

const kitBadgeThemeStyled: KitBadgeThemeStyled = {
    colors: {
        background: {
            default: colors.secondary.red.red400,
            green: colors.secondary.green.green400,
            blue: colors.primary.blue400,
            blueInvert: colors.primary.blue100,
            gray: colors.neutral.background
        },
        typography: {
            default: colors.neutral.typography.white,
            green: colors.neutral.typography.white,
            blue: colors.neutral.typography.white,
            blueInvert: colors.secondary.blue.blue400,
            gray: colors.neutral.typography.black60
        }
    }
};

const formatKitTokenForAntdDesignTolen = (
    kitBadgeThemeAntd: KitBadgeThemeAntd
): AntdThemeConfigWithRequiredComponents['Badge'] => {
    const {colors, typography} = kitBadgeThemeAntd;

    return {
        fontFamily: typography.fontFamily,
        colorError: colors.background.error,
        colorSuccess: colors.background.success,
        colorPrimary: colors.background.primary,
        colorWarning: colors.background.warning
    };
};

export const KitBadgeTheme = {
    ...formatKitTokenForAntdDesignTolen(kitBadgeThemeAntd),
    ...kitBadgeThemeStyled
};
