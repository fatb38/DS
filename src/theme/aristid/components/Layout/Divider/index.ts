import {IKitDividerCssTokens} from '@theme/types/components/Layout/Divider';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitDividerCssTokens = generateCssTokens<IKitDividerCssTokens>('--components-Divider', {
    colors: {
        typography: {
            default: ''
        },
        split: {
            default: ''
        }
    },
    typography: {
        fontFamily: '',
        fontWeight: '',
        fontSize: '',
        lineHeight: ''
    }
});
