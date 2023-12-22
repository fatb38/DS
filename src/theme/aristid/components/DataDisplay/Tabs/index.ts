import {IKitTabsCssTokens} from '@theme/types/components/DataDisplay/Tabs';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitTabsCssTokens = generateCssTokens<IKitTabsCssTokens>('--components-Tabs', {
    card: {
        colors: {
            background: {
                default: ''
            },
            border: {
                default: '',
                active: ''
            }
        },
        border: {
            radius: ''
        },
        padding: {
            horizontal: '',
            vertical: ''
        }
    },
    typography: {
        fontFamily: '',
        fontSize: {
            s: '',
            m: '',
            l: ''
        },
        colors: {
            disabled: '',
            active: '',
            hover: '',
            selected: ''
        }
    },
    extraContent: {
        colors: {
            border: {
                default: ''
            },
            typography: {
                default: ''
            }
        },
        border: {
            radius: ''
        },
        padding: {
            horizontal: '',
            vertical: ''
        },
        margin: {
            vertical: '',
            horizontal: ''
        }
    },
    DropDown: {
        colors: {
            background: {
                default: ''
            },
            typography: {
                default: ''
            }
        },
        typography: {
            fontFamily: '',
            fontWeight: ''
        },
        menu: {
            colors: {
                background: {
                    default: ''
                }
            }
        },
        menuItem: {
            colors: {
                background: {
                    active: '',
                    selected: '',
                    disabled: ''
                },
                typography: {
                    default: '',
                    active: '',
                    disabled: ''
                }
            },
            typography: {
                fontWeight: ''
            }
        }
    }
});
