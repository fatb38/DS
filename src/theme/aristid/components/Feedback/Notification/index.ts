import {IKitThemeGeneral} from '@theme/types';
import {IKitNotificationCssTokens, IKitNotificationTheme} from '@theme/types/components/Feedback/Notification';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

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

export const kitNotificationCssTokens = generateCssTokens<IKitNotificationCssTokens>('--components-Notification', {
    colors: {
        typography: {
            message: {
                info: '',
                success: '',
                warning: '',
                error: ''
            }
        },
        icon: {
            info: '',
            success: '',
            warning: '',
            error: '',
            background: {
                info: '',
                success: '',
                warning: '',
                error: ''
            }
        }
    },
    typography: {
        fontFamily: '',
        fontSize: {
            message: '',
            content: ''
        },
        fontWeight: {
            message: ''
        }
    }
});
