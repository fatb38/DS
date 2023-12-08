import {IKitThemeGeneral} from '@theme/types';
import {IKitDropDownCssTokens, IKitDropDownTheme} from '@theme/types/components/Navigation/DropDown';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const getKitDropDownTokens = (generalTokens: IKitThemeGeneral): IKitDropDownTheme => {
    const {colors, typography} = generalTokens;

    return {
        colors: {
            background: {
                default: colors.secondary.mediumGrey.mediumGrey100
            },
            typography: {
                default: colors.secondary.mediumGrey.mediumGrey500
            }
        },
        typography: {
            fontFamily: typography.fontFamily,
            fontWeight: typography.mediumfontWeight
        },
        menu: {
            colors: {
                background: {
                    default: colors.secondary.mediumGrey.mediumGrey100
                }
            }
        },
        menuItem: {
            colors: {
                background: {
                    active: colors.primary.primary100,
                    selected: colors.primary.primary100,
                    disabled: colors.secondary.mediumGrey.mediumGrey100
                },
                typography: {
                    default: colors.secondary.mediumGrey.mediumGrey500,
                    active: colors.primary.primary400,
                    disabled: colors.secondary.mediumGrey.mediumGrey400
                }
            },
            typography: {
                fontWeight: typography.mediumfontWeight
            },
            divider: {
                colors: {
                    background: {
                        default: colors.secondary.mediumGrey.mediumGrey200
                    }
                }
            }
        },
        menuItemGroup: {
            title: {
                colors: {
                    typography: {
                        default: colors.neutral.typography.black
                    }
                },
                typography: {
                    fontSize: typography.fontSize7,
                    fontWeight: typography.boldFontWeight
                }
            }
        },
        subMenu: {
            colors: {
                background: {
                    active: colors.primary.primary100
                },
                typography: {
                    active: colors.primary.primary400
                }
            },
            title: {
                colors: {
                    background: {
                        disabled: colors.secondary.mediumGrey.mediumGrey100
                    },
                    typography: {
                        default: colors.secondary.mediumGrey.mediumGrey500,
                        active: colors.primary.primary400,
                        disabled: colors.secondary.mediumGrey.mediumGrey400
                    }
                },
                typography: {
                    fontWeight: typography.mediumfontWeight
                }
            },
            expIcon: {
                colors: {
                    background: {
                        default: colors.secondary.mediumGrey.mediumGrey100,
                        disabled: colors.secondary.mediumGrey.mediumGrey100
                    },
                    typography: {
                        default: colors.secondary.mediumGrey.mediumGrey500,
                        active: colors.primary.primary400,
                        disabled: colors.secondary.mediumGrey.mediumGrey400
                    }
                }
            }
        }
    };
};

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
