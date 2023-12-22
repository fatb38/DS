import {IKitItemListCssTokens} from '@theme/types/components/DataDisplay/ItemList';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitItemListCssTokens = generateCssTokens<IKitItemListCssTokens>('--components-ItemList', {
    itemList: {
        colors: {
            background: {
                default: '',
                disabled: ''
            },
            border: {
                default: '',
                disabled: '',
                hover: ''
            }
        },
        border: {
            radius: 0
        }
    },
    title: {
        typography: {
            fontWeight: '',
            fontSize: ''
        },
        colors: {
            default: '',
            disabled: ''
        }
    },
    description: {
        typography: {
            fontWeight: '',
            fontSize: ''
        },
        colors: {
            default: '',
            disabled: ''
        }
    },
    collexp: {
        colors: {
            default: '',
            disabled: '',
            hover: ''
        }
    },
    rafter: {
        colors: {
            default: '',
            disabled: '',
            hover: ''
        }
    }
});
