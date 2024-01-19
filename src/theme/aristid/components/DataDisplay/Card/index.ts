import {IKitCardCssTokens} from '@theme/types/components/DataDisplay/Card';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitCardCssTokens = generateCssTokens<IKitCardCssTokens>('--components-Card', {
    colors: {
        background: {
            default: '',
            disabled: ''
        },
        typography: {
            title: {
                default: '',
                disabled: ''
            },
            description: {
                default: '',
                disabled: ''
            },
            extra: {
                default: '',
                disabled: ''
            }
        },
        border: {
            default: '',
            focus: '',
            hover: '',
            disabled: '',
            selected: ''
        },
        separator: {
            default: '',
            disabled: ''
        }
    },
    typography: {
        fontFamily: '',
        title: {
            fontSize: '',
            fontWeight: ''
        },
        description: {
            fontSize: '',
            fontWeight: ''
        },
        extra: {
            fontSize: '',
            fontWeight: ''
        }
    }
});
