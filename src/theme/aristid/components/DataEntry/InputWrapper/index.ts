import {IKitInputWrapperCssTokens} from '@theme/types/components/DataEntry/InputWrapper';
import {generateCssTokens} from '@theme/utils/css-tokens-generator.ts';

export const kitInputWrapperCssTokens = generateCssTokens<IKitInputWrapperCssTokens>('--components-InputWrapper', {
    colors: {
        typography: {
            default: '',
            disabled: '',
            warning: '',
            error: ''
        },
        border: {
            default: '',
            disabled: '',
            error: '',
            warning: ''
        }
    },
    border: {
        radius: ''
    },
    gap: {
        label: '',
        helper: ''
    }
});
