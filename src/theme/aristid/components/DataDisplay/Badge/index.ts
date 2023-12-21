import {IKitBadgeCssTokens} from '@theme/types/components/DataDisplay/Badge';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitBadgeCssTokens = generateCssTokens<IKitBadgeCssTokens>('--components-Badge', {
    colors: {
        background: {
            default: '',
            primary: '',
            error: '',
            success: '',
            warning: ''
        },
        typography: {
            default: ''
        }
    },
    typography: {
        fontFamily: ''
    }
});
