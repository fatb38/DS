import {IKitThemeGeneral} from '@theme/types';
import {IKitBadgeTheme} from '@theme/types/components/DataDisplay/Badge';

export const getKitBadgeTokens = (generalTokens: IKitThemeGeneral): IKitBadgeTheme => {
    const {colors, typography} = generalTokens;

    return {
        colors: {
            background: {
                default: colors.secondary.red.red400,
                green: colors.secondary.green.green400,
                blue: colors.primary.primary400,
                blueInvert: colors.primary.primary100,
                gray: colors.neutral.background,
                primary: colors.primary.primary400,
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
};
