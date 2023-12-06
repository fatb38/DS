import {IKitThemeGeneral} from '@theme/types';
import {IKitItemCardCssTokens, IKitItemCardTheme} from '@theme/types/components/DataDisplay/ItemCard';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const getKitItemCardTokens = (generalTokens: IKitThemeGeneral): IKitItemCardTheme => {
    const {colors, border, typography} = generalTokens;

    return {
        card: {
            colors: {
                background: {
                    default: colors.neutral.white,
                    disabled: colors.secondary.mediumGrey.mediumGrey100
                },
                border: {
                    default: colors.secondary.mediumGrey.mediumGrey200,
                    hover: colors.primary.primary400
                }
            },
            border: {
                radius: border.radius.s
            },
            typography: {
                fontFamily: typography.fontFamily
            }
        },
        colorBar: {
            thickness: 8,
            border: {
                radius: border.radius.s
            }
        },
        select: {
            colors: {
                background: {
                    disabled: colors.secondary.mediumGrey.mediumGrey100
                },
                typography: {
                    default: colors.primary.primary400,
                    disabled: colors.secondary.mediumGrey.mediumGrey400
                }
            }
        },
        expend: {
            colors: {
                typography: {
                    default: colors.primary.primary600,
                    hover: colors.primary.primary400,
                    disabled: colors.secondary.mediumGrey.mediumGrey400
                }
            }
        },
        image: {
            colors: {
                border: {
                    default: colors.neutral.black60
                }
            },
            border: {
                radius: border.radius.s
            }
        },
        icon: {
            colors: {
                border: {
                    default: colors.neutral.black60
                }
            },
            border: {
                radius: border.radius.s
            }
        },
        title: {
            colors: {
                typography: {
                    default: colors.primary.primary600,
                    disabled: colors.secondary.mediumGrey.mediumGrey400
                }
            },
            typography: {
                fontSize: typography.fontSize6,
                fontWeight: typography.boldFontWeight
            }
        },
        description: {
            colors: {
                typography: {
                    default: colors.primary.primary600,
                    disabled: colors.secondary.mediumGrey.mediumGrey400
                }
            },
            typography: {
                fontSize: typography.fontSize5,
                fontWeight: typography.regularFontWeight
            }
        },
        footer: {
            colors: {
                typography: {
                    default: colors.primary.primary600,
                    disabled: colors.secondary.mediumGrey.mediumGrey400
                }
            },
            typography: {
                fontSize: typography.fontSize5,
                fontWeight: typography.boldFontWeight
            }
        }
    };
};

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
