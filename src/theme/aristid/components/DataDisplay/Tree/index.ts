import {IKitThemeGeneral} from '@theme/types';
import {IKitTreeCssTokens, IKitTreeTheme} from '@theme/types/components/DataDisplay/Tree';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const getKitTreeTokens = (generalTokens: IKitThemeGeneral): IKitTreeTheme => {
    const {colors, typography} = generalTokens;

    return {
        colors: {
            background: {
                hover: colors.primary.primary100
            }
        },
        typography: {
            fontFamily: typography.fontFamily,
            fontSize: typography.fontSize5
        },
        icon: {
            fontSize: typography.fontSize5
        },
        checkbox: {
            colors: {
                background: {
                    default: colors.neutral.white,
                    disabled: colors.neutral.white,
                    checked: {
                        default: colors.primary.primary400,
                        hover: colors.primary.primary500
                    }
                },
                border: {
                    default: colors.neutral.black60,
                    disabled: colors.neutral.black60,
                    hover: colors.primary.primary400,
                    checked: {
                        default: colors.primary.primary400,
                        hover: colors.primary.primary500
                    }
                },
                icon: {
                    default: colors.neutral.black60,
                    disabled: colors.neutral.black60,
                    checked: colors.neutral.white
                }
            }
        },
        treenode: {
            typography: {
                fontWeight: typography.regularFontWeight
            },
            colors: {
                typography: {
                    hover: colors.primary.primary400,
                    disabled: colors.neutral.typography.black60
                },
                background: {
                    hover: colors.primary.primary100,
                    selected: colors.primary.primary100,
                    indent: colors.neutral.white
                }
            }
        }
    };
};

export const kitTreeCssTokens = generateCssTokens<IKitTreeCssTokens>('--components-Tree', {
    colors: {
        background: {
            hover: ''
        }
    },
    typography: {
        fontFamily: '',
        fontSize: ''
    },
    icon: {
        fontSize: ''
    },
    checkbox: {
        colors: {
            background: {
                default: '',
                disabled: '',
                checked: {
                    default: '',
                    hover: ''
                }
            },
            border: {
                default: '',
                disabled: '',
                hover: '',
                checked: {
                    default: '',
                    hover: ''
                }
            },
            icon: {
                default: '',
                disabled: '',
                checked: ''
            }
        }
    },
    treenode: {
        typography: {
            fontWeight: ''
        },
        colors: {
            typography: {
                hover: '',
                disabled: ''
            },
            background: {
                hover: '',
                selected: '',
                indent: ''
            }
        }
    }
});
