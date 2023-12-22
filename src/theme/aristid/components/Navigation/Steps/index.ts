import {IKitStepsCssTokens} from '@theme/types/components/Navigation/Steps';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitStepsCssTokens = generateCssTokens<IKitStepsCssTokens>('--components-Steps', {
    colors: {
        dot: {
            default: ''
        },
        split: {
            default: ''
        },
        typography: {
            description: {
                default: '',
                active: ''
            },
            text: {
                default: '',
                active: ''
            }
        }
    },
    typography: {
        fontfamily: '',
        fontSize: ''
    }
});
