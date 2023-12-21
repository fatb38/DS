import {IKitCheckboxCssTokens} from '@theme/types/components/DataEntry/Checkbox';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitCheckboxCssTokens = generateCssTokens<IKitCheckboxCssTokens>('--components-Checkbox', {
    colors: {
        background: {
            check: '',
            hover: '',
            focus: '',
            disabled: '',
            danger: {
                default: '',
                hover: ''
            }
        },
        border: {
            default: '',
            check: '',
            hover: '',
            focus: '',
            disabled: '',
            danger: {
                default: '',
                hover: '',
                focus: ''
            }
        },
        typography: {
            disabled: '',
            danger: {
                disabled: ''
            }
        }
    },
    typography: {
        fontWeight: '',
        fontFamily: '',
        fontSize: '',
        lineHeight: '',
        lineWidth: ''
    },
    border: {
        radius: ''
    }
});
