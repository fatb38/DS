import {IKitThemeGeneral} from '@theme/types';
import {IKitNotificationTheme} from '@theme/types/components/Feedback/Notification';

export const getKitNotificationTokens = (generalTokens: IKitThemeGeneral): IKitNotificationTheme => {
    const {colors, typography} = generalTokens;

    return {
        colors: {
            typography: {
                message: {
                    info: colors.primary.primary400,
                    success: colors.secondary.green.green400,
                    warning: colors.secondary.orange.orange400,
                    error: colors.secondary.red.red400
                }
            },
            icon: {
                info: colors.primary.primary400,
                success: colors.secondary.green.green400,
                warning: colors.secondary.orange.orange400,
                error: colors.secondary.red.red400,
                background: {
                    info: colors.primary.primary100,
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
};
