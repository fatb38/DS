import {IKitIconCssTokens} from '@theme/types/components/General/Icon';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitIconCssTokens = generateCssTokens<IKitIconCssTokens>('--components-Icon', {
    colors: {
        icon: {
            default: '',
            on: ''
        },
        background: {
            default: '',
            on: ''
        }
    },
    border: {
        radius: {
            default: '',
            on: ''
        }
    }
});
