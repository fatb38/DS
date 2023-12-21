import {IKitSnackBarCssTokens} from '@theme/types/components/Feedback/SnackBar';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitSnackBarCssTokens = generateCssTokens<IKitSnackBarCssTokens>('--components-SnackBar', {
    colors: {
        background: '',
        border: '',
        typography: {
            title: ''
        },
        cta: {
            border: {
                default: '',
                hover: ''
            },
            typography: {
                default: '',
                hover: ''
            }
        },
        closeIcon: {
            default: '',
            hover: ''
        }
    },
    typography: {
        fontFamily: '',
        title: {
            fontSize: '',
            fontWeight: ''
        },
        cta: {
            fontWeight: ''
        }
    }
});
