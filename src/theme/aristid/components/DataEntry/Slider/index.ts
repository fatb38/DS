import {IKitSliderCssTokens} from '@theme/types/components/DataEntry/Slider';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitSliderCssTokens = generateCssTokens<IKitSliderCssTokens>('--components-Slider', {
    handle: {
        colors: {
            background: {
                hover: '',
                focus: ''
            },
            border: {
                default: '',
                disabled: ''
            }
        },
        size: '',
        border: ''
    },
    rail: {
        colors: {
            background: {
                default: '',
                hover: ''
            }
        },
        size: ''
    },
    dot: {
        colors: {
            border: {
                default: '',
                active: ''
            }
        },
        size: ''
    },
    track: {
        colors: {
            background: {
                default: '',
                hover: ''
            }
        }
    },
    startIcon: {
        colors: {
            default: ''
        }
    },
    endIcon: {
        colors: {
            default: ''
        }
    }
});
