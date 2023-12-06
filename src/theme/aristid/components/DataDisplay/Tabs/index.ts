import {IKitThemeGeneral} from '@theme/types';
import {IKitTabsCssTokens, IKitTabsTheme} from '@theme/types/components/DataDisplay/Tabs';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const getKitTabsTokens = (generalTokens: IKitThemeGeneral): IKitTabsTheme => {
    const {colors, typography, border, spacing} = generalTokens;

    return {
        card: {
            colors: {
                background: {
                    default: colors.neutral.grey.grey100
                },
                border: {
                    default: colors.neutral.grey.grey300,
                    active: colors.primary.primary400
                }
            },
            border: {
                radius: border.radius.xxs
            },
            padding: {
                vertical: spacing.xs,
                horizontal: spacing.s
            }
        },
        typography: {
            fontFamily: typography.fontFamily,
            fontSize: {
                s: typography.fontSize5,
                m: typography.fontSize5,
                l: typography.fontSize5
            },
            colors: {
                disabled: colors.neutral.grey.grey300,
                active: colors.primary.primary600,
                hover: colors.primary.primary400,
                selected: colors.primary.primary400
            }
        },
        extraContent: {
            colors: {
                border: {
                    default: colors.neutral.grey.grey300
                },
                typography: {
                    default: colors.neutral.typography.black
                }
            },
            border: {
                radius: border.radius.xxs
            },
            padding: {
                vertical: spacing.xxs,
                horizontal: spacing.s
            },
            margin: {
                vertical: spacing.xxs,
                horizontal: spacing.s
            }
        },
        DropDown: {
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
                }
            }
        }
    };
};

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
