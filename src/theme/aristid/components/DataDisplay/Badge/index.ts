import {IKitThemeGeneral} from '@theme/types';
import {IKitBadgeTheme} from '@theme/types/components/DataDisplay/Badge';

export const getKitBadgeTokens = (generalTokens: IKitThemeGeneral): IKitBadgeTheme => {
    const {colors, typography} = generalTokens;

    return {
        colors: {
            background: {
                default: colors.secondary.red.red400,
                primary: colors.primary.primary400,
                error: colors.secondary.red.red400,
                success: colors.secondary.green.green400,
                warning: colors.secondary.yellow.yellow400
            },
            typography: {
                default: colors.neutral.typography.white
            }
        },
        typography: {
            fontFamily: typography.fontFamily
        }
    };
};
