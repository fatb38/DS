import {IKitMenuCssTokens} from '@theme/types/components/Navigation/Menu';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitMenuCssTokens = generateCssTokens<IKitMenuCssTokens>('--components-Menu', {
    colors: {
        background: {
            default: ''
        }
    },
    itemMenu: {
        colors: {
            background: {
                default: '',
                active: '',
                hover: '',
                danger: ''
            },
            border: {
                active: ''
            },
            value: {
                default: ''
            },
            rafter: {
                default: '',
                hover: ''
            },
            title: {
                default: '',
                danger: ''
            },
            icon: {
                default: '',
                danger: ''
            }
        }
    }
});
