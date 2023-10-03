import {IKitThemeGeneral} from '@theme/types';
import {IKitAvatarGroupTheme, IKitAvatarTheme} from '@theme/types/components/DataDisplay/Avatar';

export const getKitAvatarTokens = (generalTokens: IKitThemeGeneral): IKitAvatarTheme => {
    const {colors} = generalTokens;

    return {
        colors: {
            background: {
                default: colors.neutral.typography.black60,
                blueInvert: colors.primary.blue100
            },
            typography: {
                default: colors.neutral.typography.white,
                blueInvert: colors.secondary.blue.blue200,
                dark: colors.neutral.typography.black
            }
        }
    };
};

export const getKitAvatarGroupTokens = (generalTokens: IKitThemeGeneral): IKitAvatarGroupTheme => {
    const {colors} = generalTokens;

    return {
        colors: {
            background: {
                default: colors.primary.blue100
            },
            typography: {
                default: colors.secondary.blue.blue200
            }
        }
    };
};
