import {IKitAlertCssTokens} from '@theme/types/components/Feedback/Alert';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitAlertCssTokens = generateCssTokens<IKitAlertCssTokens>('--components-Alert', {
    colors: {
        background: {
            success: '',
            info: '',
            warning: '',
            error: ''
        },
        typography: {
            default: ''
        },
        border: {
            success: '',
            info: '',
            warning: '',
            error: ''
        },
        icon: {
            alert: {
                success: '',
                info: '',
                warning: '',
                error: ''
            }
        }
    },
    border: {
        radius: ''
    },
    typography: {
        fontFamily: '',
        fontSize: {
            message: '',
            description: ''
        }
    },
    icon: {
        alert: {
            size: ''
        },
        close: {
            size: ''
        }
    }
});
