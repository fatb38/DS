import {IKitTreeCssTokens} from '@theme/types/components/DataDisplay/Tree';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitTreeCssTokens = generateCssTokens<IKitTreeCssTokens>('--components-Tree', {
    colors: {
        background: {
            hover: ''
        }
    },
    typography: {
        fontFamily: '',
        fontSize: ''
    },
    icon: {
        fontSize: ''
    },
    checkbox: {
        colors: {
            background: {
                default: '',
                disabled: '',
                checked: {
                    default: '',
                    hover: ''
                }
            },
            border: {
                default: '',
                disabled: '',
                hover: '',
                checked: {
                    default: '',
                    hover: ''
                }
            },
            icon: {
                default: '',
                disabled: '',
                checked: ''
            }
        }
    },
    treenode: {
        typography: {
            fontWeight: ''
        },
        colors: {
            typography: {
                hover: '',
                disabled: ''
            },
            background: {
                hover: '',
                selected: '',
                indent: ''
            }
        }
    }
});
