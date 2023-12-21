import {IKitItemCardCssTokens} from '@theme/types/components/DataDisplay/ItemCard';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitItemCardCssTokens = generateCssTokens<IKitItemCardCssTokens>('--components-ItemCard', {
    card: {
        colors: {
            background: {
                default: '',
                disabled: ''
            },
            border: {
                default: '',
                hover: ''
            }
        },
        border: {
            radius: ''
        },
        typography: {
            fontFamily: ''
        }
    },
    colorBar: {
        thickness: '',
        border: {
            radius: ''
        }
    },
    select: {
        colors: {
            background: {
                disabled: ''
            },
            typography: {
                default: '',
                disabled: ''
            }
        }
    },
    expend: {
        colors: {
            typography: {
                default: '',
                hover: '',
                disabled: ''
            }
        }
    },
    image: {
        colors: {
            border: {
                default: ''
            }
        },
        border: {
            radius: ''
        }
    },
    icon: {
        colors: {
            border: {
                default: ''
            }
        },
        border: {
            radius: ''
        }
    },
    title: {
        colors: {
            typography: {
                default: '',
                disabled: ''
            }
        },
        typography: {
            fontSize: 0,
            fontWeight: ''
        }
    },
    description: {
        colors: {
            typography: {
                default: '',
                disabled: ''
            }
        },
        typography: {
            fontSize: '',
            fontWeight: ''
        }
    },
    footer: {
        colors: {
            typography: {
                default: '',
                disabled: ''
            }
        },
        typography: {
            fontSize: '',
            fontWeight: ''
        }
    }
});
