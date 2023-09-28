import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {KitNotificatiobThemeStyled} from '@theme/types/components/Feedback/Notification';

const {colors, typography, border, spacing} = KitAristidThemeGeneral;

const kitNotificationThemeStyled: KitNotificatiobThemeStyled = {
    colors: {
        typography: {
            message: {
                info: colors.primary.blue400,
                success: colors.secondary.green.green400,
                warning: colors.secondary.orange.orange400,
                error: colors.secondary.red.red400
            }
        },
        icon: {
            info: colors.primary.blue400,
            success: colors.secondary.green.green400,
            warning: colors.secondary.orange.orange400,
            error: colors.secondary.red.red400,
            background: {
                info: colors.primary.blue100,
                success: colors.secondary.green.green100,
                warning: colors.secondary.orange.orange100,
                error: colors.secondary.red.red100
            }
        }
    },
    typography: {
        fontFamily: typography.fontFamily,
        fontSize: {
            message: typography.fontSize4,
            content: typography.fontSize5
        },
        fontWeight: {
            message: typography.mediumfontWeight
        }
    }
};

export const KitNotificationTheme = {
    ...kitNotificationThemeStyled
};
