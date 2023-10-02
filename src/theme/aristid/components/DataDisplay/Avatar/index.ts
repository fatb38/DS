import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitAvatarGroupTheme, IKitAvatarTheme} from '@theme/types/components/DataDisplay/Avatar';

const {colors} = KitAristidThemeGeneral;

export const KitAvatarTheme: IKitAvatarTheme = {
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

export const KitAvatarGroupTheme: IKitAvatarGroupTheme = {
    colors: {
        background: {
            default: colors.primary.blue100
        },
        typography: {
            default: colors.secondary.blue.blue200
        }
    }
};
