import {IKitColorPickerCssTokens} from '@theme/types/components/DataEntry/ColorPicker';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitColorPickerCssTokens = generateCssTokens<IKitColorPickerCssTokens>('--components-ColorPicker', {
    colors: {
        background: {
            default: '',
            disabled: ''
        },
        typography: {
            default: '',
            disabled: ''
        },
        border: {
            default: '',
            hover: '',
            focused: '',
            disabled: ''
        }
    },
    typography: {
        fontFamily: '',
        fontSize: '',
        fontWeight: ''
    },
    border: {
        radius: ''
    },
    colorBlock: {
        border: {
            radius: ''
        }
    },
    panel: {
        input: {
            typography: {
                fontWeight: ''
            },
            colors: {
                prefix: {
                    default: ''
                }
            }
        },
        select: {
            typography: {
                fontWeight: ''
            },
            colors: {
                typography: {
                    default: ''
                },
                rafter: {
                    default: ''
                }
            }
        },
        preset: {
            typography: {
                fontWeight: ''
            },
            colors: {
                typography: {
                    default: ''
                },
                rafter: {
                    default: ''
                },
                empty: {
                    default: ''
                }
            }
        }
    }
});
