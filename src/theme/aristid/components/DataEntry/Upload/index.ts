import {IKitUploadCssTokens, IKitUploadDraggerCssTokens} from '@theme/types/components/DataEntry/Upload';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitUploadDraggerCssTokens = generateCssTokens<IKitUploadDraggerCssTokens>('--components-Upload-Dragger', {
    colors: {
        background: {
            default: ''
        },
        border: {
            default: '',
            hover: ''
        },
        dragIcon: {
            default: ''
        },
        typography: {
            text: '',
            hint: '',
            item: ''
        }
    },
    typography: {
        fontSize: '',
        fontWeight: '',
        lineHeight: ''
    }
});

export const kitUploadCssTokens = generateCssTokens<IKitUploadCssTokens>('--components-Upload', {
    colors: {
        card: {
            border: {
                default: ''
            },
            background: {
                default: ''
            }
        },
        list: {
            preview: {
                hover: ''
            },
            border: {
                default: '',
                uploading: '',
                error: ''
            },
            typography: {
                done: '',
                error: '',
                uploading: ''
            }
        }
    }
});
