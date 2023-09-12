import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {KitAvatarGroupThemeStyled, KitAvatarThemeStyled} from '@theme/types/components/DataDisplay/Avatar';

const {colors} = KitAristidThemeGeneral;

const kitAvatarStyled: KitAvatarThemeStyled = {
    colors: {
        background: {
            default: colors.neutral.typography.black60,
            blueInvert: colors.primary.blue100
        },
        typography: {
            default: colors.neutral.typography.white,
            blueInvert: colors.secondary.blue.blue200
        }
    }
};

export const KitAvatarTheme = {
    ...kitAvatarStyled
};

const kitAvatarGroupStyled: KitAvatarGroupThemeStyled = {
    colors: {
        background: {
            default: colors.primary.blue100
        },
        typography: {
            default: colors.secondary.blue.blue200
        }
    }
};

export const KitAvatarGroupTheme = {
    ...kitAvatarGroupStyled
};
