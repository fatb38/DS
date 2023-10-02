import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitBadgeTheme} from '@theme/types/components/DataDisplay/Badge';

const {colors, typography} = KitAristidThemeGeneral;

export const KitBadgeTheme: IKitBadgeTheme = {
    colors: {
        background: {
            default: colors.secondary.red.red400,
            green: colors.secondary.green.green400,
            blue: colors.primary.blue400,
            blueInvert: colors.primary.blue100,
            gray: colors.neutral.background,
            primary: colors.primary.blue400,
            error: colors.secondary.red.red400,
            success: colors.secondary.green.green400,
            warning: colors.secondary.yellow.yellow400
        },
        typography: {
            default: colors.neutral.typography.white,
            green: colors.neutral.typography.white,
            blue: colors.neutral.typography.white,
            blueInvert: colors.secondary.blue.blue400,
            gray: colors.neutral.typography.black60
        }
    },
    typography: {
        fontFamily: typography.fontFamily
    }
};
