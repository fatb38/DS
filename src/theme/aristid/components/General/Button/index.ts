import {IKitThemeGeneral} from '@theme/types';
import {IKitButtonTheme, KitColoredSegmentedButtonThemes} from '@theme/types/components/General/Button';
import {KitColorKeys} from '@theme/types/general/colors';

const _getPrimaryKitButtonTokens = (generalTokens: IKitThemeGeneral): IKitButtonTheme['primary'] => {
    const {typography, border, colors} = generalTokens;

    return {
        colors: {
            typography: {
                default: colors.neutral.typography.white,
                hover: colors.neutral.typography.white,
                active: colors.neutral.typography.white,
                focus: colors.neutral.typography.white,
                disabled: colors.secondary.mediumGrey.mediumGrey400,
                ghost: colors.primary.primary400,
                danger: {
                    default: colors.neutral.typography.white,
                    disabled: colors.secondary.mediumGrey.mediumGrey400
                }
            },
            background: {
                default: colors.primary.primary400,
                hover: colors.primary.primary500,
                active: colors.primary.primary600,
                focus: colors.primary.primary400,
                disabled: colors.secondary.mediumGrey.mediumGrey100,
                ghost: colors.neutral.white,
                danger: {
                    default: colors.secondary.red.red400,
                    hover: colors.secondary.red.red500,
                    active: colors.secondary.red.red600,
                    focus: colors.secondary.red.red400,
                    disabled: colors.secondary.mediumGrey.mediumGrey100
                }
            },
            border: {
                default: colors.primary.primary400,
                hover: colors.primary.primary500,
                active: colors.primary.primary600,
                focus: colors.primary.primary400,
                disabled: colors.secondary.mediumGrey.mediumGrey200,
                danger: {
                    default: colors.secondary.red.red400,
                    hover: colors.secondary.red.red500,
                    active: colors.secondary.red.red600,
                    focus: colors.secondary.red.red400,
                    disabled: colors.secondary.mediumGrey.mediumGrey200
                }
            }
        },
        typography: {
            fontWeight: typography.regularFontWeight,
            iconSize: {
                xs: typography.fontSize7,
                s: typography.fontSize6,
                m: typography.fontSize5,
                l: typography.fontSize4,
                xl: typography.fontSize3
            }
        },
        compact: {
            border: {
                radius: border.radius.s
            }
        }
    };
};

const _getDefaultKitButtonTokens = (generalTokens: IKitThemeGeneral): IKitButtonTheme['default'] => {
    const {typography, border, colors} = generalTokens;

    return {
        colors: {
            typography: {
                default: colors.primary.primary400,
                hover: colors.primary.primary400,
                active: colors.primary.primary400,
                focus: colors.primary.primary400,
                disabled: colors.secondary.mediumGrey.mediumGrey400,
                danger: {
                    default: colors.secondary.red.red400,
                    disabled: colors.secondary.mediumGrey.mediumGrey400
                }
            },
            background: {
                default: colors.neutral.white,
                hover: colors.neutral.white,
                active: colors.primary.primary100,
                focus: colors.neutral.white,
                disabled: colors.secondary.mediumGrey.mediumGrey100,
                danger: {
                    default: colors.neutral.white,
                    hover: colors.neutral.white,
                    active: colors.secondary.red.red100,
                    focus: colors.neutral.white,
                    disabled: colors.secondary.mediumGrey.mediumGrey100
                }
            },
            border: {
                default: colors.primary.primary100,
                hover: colors.primary.primary400,
                active: colors.primary.primary400,
                focus: colors.primary.primary400,
                disabled: colors.secondary.mediumGrey.mediumGrey200,
                danger: {
                    default: colors.secondary.red.red100,
                    hover: colors.secondary.red.red400,
                    active: colors.secondary.red.red400,
                    focus: colors.secondary.red.red400,
                    disabled: colors.secondary.mediumGrey.mediumGrey200
                }
            }
        },
        typography: {
            fontWeight: typography.regularFontWeight,
            iconSize: {
                xs: typography.fontSize7,
                s: typography.fontSize6,
                m: typography.fontSize5,
                l: typography.fontSize4,
                xl: typography.fontSize3
            }
        },
        compact: {
            border: {
                radius: border.radius.s
            }
        }
    };
};

const _getTextKitButtonTokens = (generalTokens: IKitThemeGeneral): IKitButtonTheme['text'] => {
    const {typography, border, colors} = generalTokens;

    return {
        colors: {
            typography: {
                default: colors.primary.primary400,
                hover: colors.primary.primary400,
                active: colors.primary.primary400,
                focus: colors.primary.primary400,
                disabled: colors.secondary.mediumGrey.mediumGrey400,
                danger: {
                    default: colors.secondary.red.red400,
                    disabled: colors.secondary.mediumGrey.mediumGrey400
                }
            },
            background: {
                default: 'initial',
                hover: colors.secondary.mediumGrey.mediumGrey100,
                active: colors.primary.primary100,
                focus: colors.neutral.white,
                disabled: 'initial',
                danger: {
                    default: 'initial',
                    hover: colors.secondary.red.red100,
                    active: colors.secondary.red.red100,
                    focus: colors.neutral.white,
                    disabled: 'initial'
                }
            },
            border: {
                default: 'initial',
                hover: colors.secondary.mediumGrey.mediumGrey100,
                active: colors.primary.primary100,
                focus: colors.primary.primary400,
                disabled: 'initial',
                danger: {
                    default: 'initial',
                    hover: colors.secondary.red.red400,
                    active: colors.secondary.red.red400,
                    focus: colors.secondary.red.red400,
                    disabled: 'initial'
                }
            }
        },
        typography: {
            fontWeight: typography.regularFontWeight,
            iconSize: {
                xs: typography.fontSize7,
                s: typography.fontSize6,
                m: typography.fontSize5,
                l: typography.fontSize4,
                xl: typography.fontSize3
            }
        },
        compact: {
            border: {
                radius: border.radius.s
            }
        }
    };
};

const _getLinkKitButtonTokens = (generalTokens: IKitThemeGeneral): IKitButtonTheme['link'] => {
    const {typography, border, colors} = generalTokens;

    return {
        colors: {
            typography: {
                default: colors.primary.primary400,
                hover: colors.primary.primary400,
                active: colors.primary.primary400,
                focus: colors.primary.primary400,
                disabled: colors.secondary.mediumGrey.mediumGrey400,
                danger: {
                    default: colors.secondary.red.red400,
                    disabled: colors.secondary.mediumGrey.mediumGrey400
                }
            },
            background: {
                default: colors.neutral.white,
                hover: colors.neutral.white,
                active: colors.neutral.white,
                focus: colors.neutral.white,
                disabled: colors.neutral.white,
                danger: {
                    default: colors.neutral.white,
                    hover: colors.neutral.white,
                    active: colors.neutral.white,
                    focus: colors.neutral.white,
                    disabled: colors.neutral.white
                }
            },
            border: {
                default: colors.primary.primary400,
                hover: colors.primary.primary400,
                active: colors.primary.primary400,
                focus: colors.primary.primary400,
                disabled: colors.secondary.mediumGrey.mediumGrey200,
                danger: {
                    default: colors.secondary.red.red400,
                    hover: colors.secondary.red.red400,
                    active: colors.secondary.red.red400,
                    focus: colors.secondary.red.red400,
                    disabled: colors.secondary.mediumGrey.mediumGrey200
                }
            }
        },
        typography: {
            fontWeight: typography.regularFontWeight,
            iconSize: {
                xs: typography.fontSize7,
                s: typography.fontSize6,
                m: typography.fontSize5,
                l: typography.fontSize4,
                xl: typography.fontSize3
            }
        },
        compact: {
            border: {
                radius: border.radius.s
            }
        }
    };
};

const _getSegmentedKitButtonTokens = (generalTokens: IKitThemeGeneral): IKitButtonTheme['default'] => {
    const {typography, border, colors} = generalTokens;

    return {
        colors: {
            typography: {
                default: colors.primary.primary500,
                hover: colors.primary.primary500,
                active: colors.primary.primary500,
                focus: colors.primary.primary500,
                disabled: colors.secondary.mediumGrey.mediumGrey400,
                danger: {
                    default: colors.secondary.red.red500,
                    disabled: colors.secondary.mediumGrey.mediumGrey400
                },
                iconCheck: colors.primary.primary400
            },
            background: {
                default: colors.neutral.white,
                hover: colors.neutral.white,
                active: colors.primary.primary100,
                focus: colors.neutral.white,
                disabled: colors.secondary.mediumGrey.mediumGrey100,
                danger: {
                    default: colors.neutral.white,
                    hover: colors.neutral.white,
                    active: colors.secondary.red.red100,
                    focus: colors.neutral.white,
                    disabled: colors.secondary.mediumGrey.mediumGrey100
                }
            },
            border: {
                default: colors.primary.primary100,
                hover: colors.primary.primary400,
                active: colors.primary.primary400,
                focus: colors.primary.primary400,
                disabled: colors.secondary.mediumGrey.mediumGrey200,
                danger: {
                    default: colors.secondary.red.red100,
                    hover: colors.secondary.red.red400,
                    active: colors.secondary.red.red400,
                    focus: colors.secondary.red.red400,
                    disabled: colors.secondary.mediumGrey.mediumGrey200
                }
            }
        },
        typography: {
            fontWeight: typography.regularFontWeight,
            iconSize: {
                xs: typography.fontSize7,
                s: typography.fontSize6,
                m: typography.fontSize5,
                l: typography.fontSize4,
                xl: typography.fontSize3
            }
        },
        compact: {
            border: {
                radius: border.radius.s
            }
        }
    };
};

const _generateColoredSegmentedKitButtonThemes = (generalTokens: IKitThemeGeneral): KitColoredSegmentedButtonThemes => {
    const {typography, border, colors} = generalTokens;
    const colorKeys: KitColorKeys[] = Object.keys(colors.secondary) as KitColorKeys[];

    const colorThemes = colorKeys.reduce<KitColoredSegmentedButtonThemes>((acc, color) => {
        const theme = {
            colors: {
                typography: {
                    default: colors.secondary[color][color + '500'],
                    hover: colors.secondary[color][color + '500'],
                    active: colors.secondary[color][color + '500'],
                    focus: colors.secondary[color][color + '500'],
                    disabled: colors.secondary.mediumGrey.mediumGrey400,
                    danger: {
                        default: colors.secondary.red.red500,
                        disabled: colors.secondary.mediumGrey.mediumGrey400
                    },
                    iconCheck: colors.secondary[color][color + '400']
                },
                background: {
                    default: colors.neutral.white,
                    hover: colors.neutral.white,
                    active: colors.secondary[color][color + '100'],
                    focus: colors.neutral.white,
                    disabled: colors.secondary.mediumGrey.mediumGrey100,
                    danger: {
                        default: colors.neutral.white,
                        hover: colors.neutral.white,
                        active: colors.secondary.red.red100,
                        focus: colors.neutral.white,
                        disabled: colors.secondary.mediumGrey.mediumGrey100
                    }
                },
                border: {
                    default: colors.secondary[color][color + '100'],
                    hover: colors.secondary[color][color + '400'],
                    active: colors.secondary[color][color + '400'],
                    focus: colors.secondary[color][color + '400'],
                    disabled: colors.secondary.mediumGrey.mediumGrey200,
                    danger: {
                        default: colors.secondary.red.red100,
                        hover: colors.secondary.red.red400,
                        active: colors.secondary.red.red400,
                        focus: colors.secondary.red.red400,
                        disabled: colors.secondary.mediumGrey.mediumGrey200
                    }
                }
            },
            typography: {
                fontWeight: typography.regularFontWeight,
                iconSize: {
                    xs: typography.fontSize7,
                    s: typography.fontSize6,
                    m: typography.fontSize5,
                    l: typography.fontSize4,
                    xl: typography.fontSize3
                }
            },
            compact: {
                border: {
                    radius: border.radius.s
                }
            }
        };

        return {...acc, [color]: theme};
    }, {} as KitColoredSegmentedButtonThemes);

    return colorThemes;
};

export const getKitButtonTokens = (generalTokens: IKitThemeGeneral): IKitButtonTheme => {
    const {typography, border} = generalTokens;

    return {
        typography: {
            fontFamily: typography.fontFamily,
            fontSize: typography.fontSize5,
            lineHeight: typography.lineHeight5
        },
        border: {
            radius: border.radius.pills
        },
        primary: _getPrimaryKitButtonTokens(generalTokens),
        default: _getDefaultKitButtonTokens(generalTokens),
        text: _getTextKitButtonTokens(generalTokens),
        link: _getLinkKitButtonTokens(generalTokens),
        segmented: {
            default: _getSegmentedKitButtonTokens(generalTokens),
            ..._generateColoredSegmentedKitButtonThemes(generalTokens)
        }
    };
};
