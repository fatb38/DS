import {IKitThemeGeneral} from '@theme/types';
import {IKitAvatarGroupTheme, IKitAvatarTheme} from '@theme/types/components/DataDisplay/Avatar';

export const getKitAvatarTokens = (generalTokens: IKitThemeGeneral): IKitAvatarTheme => {
    const {colors} = generalTokens;

    return {
        colors: {
            background: {
                default: colors.neutral.black60
            },
            typography: {
                default: colors.neutral.typography.white
            }
        }
    };
};

export const getKitAvatarGroupTokens = (generalTokens: IKitThemeGeneral): IKitAvatarGroupTheme => {
    const {colors} = generalTokens;

    return {
        colors: {
            background: {
                default: colors.primary.primary100
            },
            typography: {
                default: colors.secondary.blue.blue200
            }
        }
    };
};
