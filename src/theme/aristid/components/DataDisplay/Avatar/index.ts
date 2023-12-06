import {IKitThemeGeneral} from '@theme/types';
import {
    IKitAvatarCssTokens,
    IKitAvatarGroupCssTokens,
    IKitAvatarGroupTheme,
    IKitAvatarTheme
} from '@theme/types/components/DataDisplay/Avatar';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

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

export const kitAvatarCssTokens = generateCssTokens<IKitAvatarCssTokens>('--components-Avatar', {
    colors: {
        background: {
            default: ''
        },
        typography: {
            default: ''
        }
    }
});

export const kitAvatarGroupCssTokens = generateCssTokens<IKitAvatarGroupCssTokens>('--components-AvatarGroup', {
    colors: {
        background: {
            default: ''
        },
        typography: {
            default: ''
        }
    }
});
