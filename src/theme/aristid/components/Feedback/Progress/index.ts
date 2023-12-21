import {IKitProgressCssTokens} from '@theme/types/components/Feedback/Progress';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitProgressCssTokens = generateCssTokens<IKitProgressCssTokens>('--components-Progress', {
    colors: {
        background: '',
        progress: {
            info: '',
            success: '',
            error: ''
        }
    },
    typography: {
        fontFamily: '',
        fontSize: ''
    },
    circle: {
        typography: {
            fontWeight: '',
            fontSize: ''
        }
    }
});
