import {IKitThemeGeneral} from '@theme/types';
import {IKitAlertTheme} from '@theme/types/components/Feedback/Alert';

export const getKitAlertTokens = (generalTokens: IKitThemeGeneral): IKitAlertTheme => {
    const {colors, typography, border} = generalTokens;

    return {
        colors: {
            border: {
                success: colors.secondary.green.green300,
                info: colors.secondary.blue.blue300,
                warning: colors.secondary.yellow.yellow300,
                error: colors.secondary.red.red400
            },
            background: {
                success: colors.secondary.green.green100,
                info: colors.secondary.blue.blue100,
                warning: colors.secondary.yellow.yellow100,
                error: colors.secondary.red.red100
            },
            typography: {
                default: colors.neutral.typography.black
            },
            icon: {
                alert: {
                    success: colors.secondary.green.green400,
                    info: colors.secondary.blue.blue400,
                    warning: colors.secondary.yellow.yellow400,
                    error: colors.secondary.red.red400
                }
            }
        },
        border: {
            radius: border.radius.s
        },
        typography: {
            fontFamily: typography.fontFamily,
            fontSize: {
                message: typography.fontSize5,
                description: typography.fontSize7
            }
        },
        icon: {
            alert: {
                size: typography.fontSize4
            },
            close: {
                size: 10
            }
        }
    };
};
