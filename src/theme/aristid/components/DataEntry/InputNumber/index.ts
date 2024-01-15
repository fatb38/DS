import {IKitInputNumberCssTokens} from '@theme/types/components/DataEntry/InputNumber';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitInputNumberCssTokens = generateCssTokens<IKitInputNumberCssTokens>('--components-InputNumber', {
    colors: {
        background: {
            default: '',
            disabled: '',
            error: '',
            warning: ''
        },
        border: {
            default: '',
            hover: '',
            disabled: '',
            error: '',
            warning: '',
            focus: {
                default: '',
                warning: '',
                error: ''
            }
        },
        prefix: {
            default: '',
            disabled: '',
            error: '',
            warning: ''
        },
        typography: {
            content: {
                default: '',
                disabled: '',
                error: '',
                warning: ''
            },
            placeholder: {
                default: '',
                disabled: '',
                error: '',
                warning: ''
            }
        }
    },
    typography: {
        fontFamily: '',
        fontSize: '',
        content: {
            fontWeight: ''
        },
        placeholder: {
            fontWeight: ''
        }
    },
    border: {
        radius: ''
    }
});
