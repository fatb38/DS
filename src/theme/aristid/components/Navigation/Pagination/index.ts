import {IKitThemeGeneral} from '@theme/types';
import {IKitPaginationCssTokens, IKitPaginationTheme} from '@theme/types/components/Navigation/Pagination';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const getKitPaginationTokens = (generalTokens: IKitThemeGeneral): IKitPaginationTheme => {
    const {colors, typography} = generalTokens;

    return {
        colors: {
            background: {
                container: {
                    default: colors.neutral.white,
                    disabled: colors.neutral.background
                }
            }
        },
        typography: {
            fontFamily: typography.fontFamily,
            fontSize: typography.fontSize5
        },
        pagination: {
            colors: {
                background: {
                    default: 'transparent',
                    hover: colors.neutral.white
                },
                typography: {
                    disabledActive: colors.neutral.typography.white
                }
            },
            border: {
                default: colors.neutral.black60,
                hover: colors.primary.primary400
            }
        },
        prevNext: {
            colors: {
                background: {
                    default: 'transparent'
                },
                border: {
                    default: 'transparent',
                    hover: colors.primary.primary400
                },
                typography: {
                    hover: colors.primary.primary400
                }
            },
            typography: {
                fontSize: typography.fontSize5
            }
        },
        selector: {
            colors: {
                background: {
                    default: colors.neutral.white
                },
                border: {
                    default: colors.neutral.black60
                }
            }
        },
        quickJumper: {
            colors: {
                border: {
                    default: colors.neutral.black60
                }
            }
        }
    };
};

export const kitPaginationCssTokens = generateCssTokens<IKitPaginationCssTokens>('--components-Pagination', {
    colors: {
        background: {
            container: {
                default: '',
                disabled: ''
            }
        }
    },
    typography: {
        fontFamily: '',
        fontSize: ''
    },
    pagination: {
        colors: {
            background: {
                default: '',
                hover: ''
            },
            typography: {
                disabledActive: ''
            }
        },
        border: {
            default: '',
            hover: ''
        }
    },
    prevNext: {
        colors: {
            background: {
                default: ''
            },
            border: {
                default: '',
                hover: ''
            },
            typography: {
                hover: ''
            }
        },
        typography: {
            fontSize: ''
        }
    },
    selector: {
        colors: {
            background: {
                default: ''
            },
            border: {
                default: ''
            }
        }
    },
    quickJumper: {
        colors: {
            border: {
                default: ''
            }
        }
    }
});
