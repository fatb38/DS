import {IKitNotificationCssTokens} from '@theme/types/components/Feedback/Notification';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

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
