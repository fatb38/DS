import {IKitModalCssTokens} from '@theme/types/components/Feedback/Modal';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitModalCssTokens = generateCssTokens<IKitModalCssTokens>('--components-Modal', {
    typography: {
        fontFamily: '',
        fontSize: {
            title: '',
            content: ''
        },
        fontWeight: {
            title: '',
            content: ''
        }
    },
    shadow: '',
    spacing: {
        vertical: {
            items: '',
            text: ''
        }
    },
    border: {
        radius: ''
    },
    colors: {
        background: {
            default: '',
            info: '',
            success: '',
            warning: '',
            error: ''
        },
        icon: {
            info: '',
            success: '',
            warning: '',
            error: ''
        }
    },
    Overlay: {
        colors: {
            background: {
                default: ''
            }
        }
    }
});
