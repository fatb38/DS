import {IKitHeaderCssTokens} from '@theme/types/components/Navigation/Header';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitHeaderCssTokens = generateCssTokens<IKitHeaderCssTokens>('--components-Header', {
    colors: {
        background: {
            default: ''
        },
        typography: {
            input: {
                default: ''
            }
        }
    }
});
