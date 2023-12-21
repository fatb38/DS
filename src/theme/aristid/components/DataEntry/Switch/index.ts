import {IKitSwitchCssTokens} from '@theme/types/components/DataEntry/Switch';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitSwitchCssTokens = generateCssTokens<IKitSwitchCssTokens>('--components-Switch', {
    colors: {
        background: {
            default: {
                on: '',
                off: ''
            },
            disabled: ''
        },
        handle: {
            background: {
                default: {
                    on: '',
                    off: ''
                },
                disabled: ''
            },
            border: {
                default: {
                    on: '',
                    off: ''
                },
                disabled: ''
            }
        }
    }
});
