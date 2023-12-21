import {IKitDropDownCssTokens} from '@theme/types/components/Navigation/DropDown';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitDropDownCssTokens = generateCssTokens<IKitDropDownCssTokens>('--components-DropDown', {
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
        },
        divider: {
            colors: {
                background: {
                    default: ''
                }
            }
        }
    },
    menuItemGroup: {
        title: {
            colors: {
                typography: {
                    default: ''
                }
            },
            typography: {
                fontSize: '',
                fontWeight: ''
            }
        }
    },
    subMenu: {
        colors: {
            background: {
                active: ''
            },
            typography: {
                active: ''
            }
        },
        title: {
            colors: {
                background: {
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
        },
        expIcon: {
            colors: {
                background: {
                    default: '',
                    disabled: ''
                },
                typography: {
                    default: '',
                    active: '',
                    disabled: ''
                }
            }
        }
    }
});
