import {borderCssTokens} from '@theme/aristid/general/border';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {IKitThemeGeneral} from '@theme/types';
import {
    IKitButtonCssTokens,
    IKitButtonPropetiesCssTokens,
    IKitButtonTheme,
    IKitButtonThemePropeties,
    KitColoredSegmentedButtonCssTokens,
    KitColoredSegmentedButtonThemes
} from '@theme/types/components/General/Button';
import {KitColorKeys} from '@theme/types/general/colors';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {KitAristidThemeGeneral} from '@theme/aristid/general';

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

const _getDefaultTextKitButtonTokens = (generalTokens: IKitThemeGeneral): IKitButtonTheme['text']['default'] => {
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

const _getGreyTextKitButtonTokens = (generalTokens: IKitThemeGeneral): IKitButtonTheme['text']['grey'] => {
    const {typography, border, colors} = generalTokens;

    return {
        colors: {
            typography: {
                default: colors.secondary.mediumGrey.mediumGrey500,
                hover: colors.secondary.mediumGrey.mediumGrey500,
                active: colors.secondary.mediumGrey.mediumGrey500,
                focus: colors.secondary.mediumGrey.mediumGrey500,
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
                focus: colors.secondary.mediumGrey.mediumGrey500,
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
const _getBlackTextKitButtonTokens = (generalTokens: IKitThemeGeneral): IKitButtonTheme['text']['black'] => {
    const {typography, border, colors} = generalTokens;

    return {
        colors: {
            typography: {
                default: colors.neutral.black,
                hover: colors.neutral.black,
                active: colors.neutral.black,
                focus: colors.neutral.black,
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
                focus: colors.neutral.black,
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

const _getTextKitButtonTokens = (generalTokens: IKitThemeGeneral): IKitButtonTheme['text'] => {
    return {
        default: _getDefaultTextKitButtonTokens(generalTokens),
        grey: _getGreyTextKitButtonTokens(generalTokens),
        black: _getBlackTextKitButtonTokens(generalTokens)
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
        const theme: IKitButtonThemePropeties = {
            colors: {
                typography: {
                    default: colors.secondary[color][color + '500'] as string,
                    hover: colors.secondary[color][color + '500'] as string,
                    active: colors.secondary[color][color + '500'] as string,
                    focus: colors.secondary[color][color + '500'] as string,
                    disabled: colors.secondary.mediumGrey.mediumGrey400,
                    danger: {
                        default: colors.secondary.red.red500,
                        disabled: colors.secondary.mediumGrey.mediumGrey400
                    },
                    iconCheck: colors.secondary[color][color + '400'] as string
                },
                background: {
                    default: colors.neutral.white,
                    hover: colors.neutral.white,
                    active: colors.secondary[color][color + '100'] as string,
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
                    default: colors.secondary[color][color + '100'] as string,
                    hover: colors.secondary[color][color + '400'] as string,
                    active: colors.secondary[color][color + '400'] as string,
                    focus: colors.secondary[color][color + '400'] as string,
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

const defaultTypeProperties: IKitButtonPropetiesCssTokens = {
    colors: {
        background: {
            active: '',
            danger: {
                active: '',
                default: '',
                disabled: '',
                focus: '',
                hover: ''
            },
            default: '',
            disabled: '',
            focus: '',
            hover: '',
            ghost: ''
        },
        border: {
            active: '',
            danger: {
                active: '',
                default: '',
                disabled: '',
                focus: '',
                hover: ''
            },
            default: '',
            disabled: '',
            focus: '',
            hover: ''
        },
        typography: {
            active: '',
            danger: {
                default: '',
                disabled: ''
            },
            default: '',
            disabled: '',
            focus: '',
            hover: '',
            iconCheck: ''
        }
    },
    compact: {
        border: {
            radius: ''
        }
    },
    typography: {
        fontWeight: '',
        iconSize: {
            l: '',
            m: '',
            s: '',
            xl: '',
            xs: ''
        }
    }
};

const colorKeys: KitColorKeys[] = Object.keys(KitAristidThemeGeneral.colors.secondary) as KitColorKeys[];

const colorThemes = colorKeys.reduce<KitColoredSegmentedButtonCssTokens>((acc, color) => {
    return {...acc, [color]: defaultTypeProperties};
}, {} as KitColoredSegmentedButtonCssTokens);

export const kitButtonCssTokens = generateCssTokens<IKitButtonCssTokens>('--components-Button', {
    typography: {
        fontFamily: '',
        fontSize: '',
        lineHeight: ''
    },
    border: {
        radius: ''
    },
    primary: defaultTypeProperties,
    default: defaultTypeProperties,
    text: {
        default: defaultTypeProperties,
        grey: defaultTypeProperties,
        black: defaultTypeProperties
    },
    link: defaultTypeProperties,
    segmented: {
        default: defaultTypeProperties,
        ...colorThemes
    }
});

const segmentedColorsCssTokens = colorKeys.reduce<KitColoredSegmentedButtonCssTokens>((acc, color) => {
    const theme = {
        colors: {
            typography: {
                default: kitColorsPaletteCssTokens.secondary[color][color + '500'] as string,
                hover: kitColorsPaletteCssTokens.secondary[color][color + '500'] as string,
                active: kitColorsPaletteCssTokens.secondary[color][color + '500'] as string,
                focus: kitColorsPaletteCssTokens.secondary[color][color + '500'] as string,
                disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400,
                danger: {
                    default: kitColorsPaletteCssTokens.secondary.red.red500,
                    disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400
                },
                iconCheck: kitColorsPaletteCssTokens.secondary[color][color + '400'] as string
            },
            background: {
                default: kitColorsPaletteCssTokens.neutral.white,
                hover: kitColorsPaletteCssTokens.neutral.white,
                active: kitColorsPaletteCssTokens.secondary[color][color + '100'] as string,
                focus: kitColorsPaletteCssTokens.neutral.white,
                disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100,
                danger: {
                    default: kitColorsPaletteCssTokens.neutral.white,
                    hover: kitColorsPaletteCssTokens.neutral.white,
                    active: kitColorsPaletteCssTokens.secondary.red.red100,
                    focus: kitColorsPaletteCssTokens.neutral.white,
                    disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100
                }
            },
            border: {
                default: kitColorsPaletteCssTokens.secondary[color][color + '100'] as string,
                hover: kitColorsPaletteCssTokens.secondary[color][color + '400'] as string,
                active: kitColorsPaletteCssTokens.secondary[color][color + '400'] as string,
                focus: kitColorsPaletteCssTokens.secondary[color][color + '400'] as string,
                disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200,
                danger: {
                    default: kitColorsPaletteCssTokens.secondary.red.red100,
                    hover: kitColorsPaletteCssTokens.secondary.red.red400,
                    active: kitColorsPaletteCssTokens.secondary.red.red400,
                    focus: kitColorsPaletteCssTokens.secondary.red.red400,
                    disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200
                }
            }
        },
        typography: {
            fontWeight: typographyCssTokens.regularFontWeight,
            iconSize: {
                xs: typographyCssTokens.fontSize7,
                s: typographyCssTokens.fontSize6,
                m: typographyCssTokens.fontSize5,
                l: typographyCssTokens.fontSize4,
                xl: typographyCssTokens.fontSize3
            }
        },
        compact: {
            border: {
                radius: borderCssTokens.radius.s
            }
        }
    };

    return {...acc, [color]: theme};
}, {} as KitColoredSegmentedButtonCssTokens);

export const kitButtonDefaultCssTokens: IKitButtonCssTokens = {
    typography: {
        fontFamily: typographyCssTokens.fontFamily,
        fontSize: typographyCssTokens.fontSize5,
        lineHeight: typographyCssTokens.lineHeight5
    },
    border: {
        radius: borderCssTokens.radius.pills
    },
    primary: {
        colors: {
            typography: {
                default: kitColorsPaletteCssTokens.neutral.typography.white,
                hover: kitColorsPaletteCssTokens.neutral.typography.white,
                active: kitColorsPaletteCssTokens.neutral.typography.white,
                focus: kitColorsPaletteCssTokens.neutral.typography.white,
                disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400,
                ghost: kitColorsPaletteCssTokens.primary.primary400,
                danger: {
                    default: kitColorsPaletteCssTokens.neutral.typography.white,
                    disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400
                }
            },
            background: {
                default: kitColorsPaletteCssTokens.primary.primary400,
                hover: kitColorsPaletteCssTokens.primary.primary500,
                active: kitColorsPaletteCssTokens.primary.primary600,
                focus: kitColorsPaletteCssTokens.primary.primary400,
                disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100,
                ghost: kitColorsPaletteCssTokens.neutral.white,
                danger: {
                    default: kitColorsPaletteCssTokens.secondary.red.red400,
                    hover: kitColorsPaletteCssTokens.secondary.red.red500,
                    active: kitColorsPaletteCssTokens.secondary.red.red600,
                    focus: kitColorsPaletteCssTokens.secondary.red.red400,
                    disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100
                }
            },
            border: {
                default: kitColorsPaletteCssTokens.primary.primary400,
                hover: kitColorsPaletteCssTokens.primary.primary500,
                active: kitColorsPaletteCssTokens.primary.primary600,
                focus: kitColorsPaletteCssTokens.primary.primary400,
                disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200,
                danger: {
                    default: kitColorsPaletteCssTokens.secondary.red.red400,
                    hover: kitColorsPaletteCssTokens.secondary.red.red500,
                    active: kitColorsPaletteCssTokens.secondary.red.red600,
                    focus: kitColorsPaletteCssTokens.secondary.red.red400,
                    disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200
                }
            }
        },
        typography: {
            fontWeight: typographyCssTokens.regularFontWeight,
            iconSize: {
                xs: typographyCssTokens.fontSize7,
                s: typographyCssTokens.fontSize6,
                m: typographyCssTokens.fontSize5,
                l: typographyCssTokens.fontSize4,
                xl: typographyCssTokens.fontSize3
            }
        },
        compact: {
            border: {
                radius: borderCssTokens.radius.s
            }
        }
    },
    default: {
        colors: {
            typography: {
                default: kitColorsPaletteCssTokens.primary.primary400,
                hover: kitColorsPaletteCssTokens.primary.primary400,
                active: kitColorsPaletteCssTokens.primary.primary400,
                focus: kitColorsPaletteCssTokens.primary.primary400,
                disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400,
                danger: {
                    default: kitColorsPaletteCssTokens.secondary.red.red400,
                    disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400
                }
            },
            background: {
                default: kitColorsPaletteCssTokens.neutral.white,
                hover: kitColorsPaletteCssTokens.neutral.white,
                active: kitColorsPaletteCssTokens.primary.primary100,
                focus: kitColorsPaletteCssTokens.neutral.white,
                disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100,
                danger: {
                    default: kitColorsPaletteCssTokens.neutral.white,
                    hover: kitColorsPaletteCssTokens.neutral.white,
                    active: kitColorsPaletteCssTokens.secondary.red.red100,
                    focus: kitColorsPaletteCssTokens.neutral.white,
                    disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100
                }
            },
            border: {
                default: kitColorsPaletteCssTokens.primary.primary100,
                hover: kitColorsPaletteCssTokens.primary.primary400,
                active: kitColorsPaletteCssTokens.primary.primary400,
                focus: kitColorsPaletteCssTokens.primary.primary400,
                disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200,
                danger: {
                    default: kitColorsPaletteCssTokens.secondary.red.red100,
                    hover: kitColorsPaletteCssTokens.secondary.red.red400,
                    active: kitColorsPaletteCssTokens.secondary.red.red400,
                    focus: kitColorsPaletteCssTokens.secondary.red.red400,
                    disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200
                }
            }
        },
        typography: {
            fontWeight: typographyCssTokens.regularFontWeight,
            iconSize: {
                xs: typographyCssTokens.fontSize7,
                s: typographyCssTokens.fontSize6,
                m: typographyCssTokens.fontSize5,
                l: typographyCssTokens.fontSize4,
                xl: typographyCssTokens.fontSize3
            }
        },
        compact: {
            border: {
                radius: borderCssTokens.radius.s
            }
        }
    },
    text: {
        default: {
            colors: {
                typography: {
                    default: kitColorsPaletteCssTokens.primary.primary400,
                    hover: kitColorsPaletteCssTokens.primary.primary400,
                    active: kitColorsPaletteCssTokens.primary.primary400,
                    focus: kitColorsPaletteCssTokens.primary.primary400,
                    disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400,
                    danger: {
                        default: kitColorsPaletteCssTokens.secondary.red.red400,
                        disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400
                    }
                },
                background: {
                    default: 'initial',
                    hover: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100,
                    active: kitColorsPaletteCssTokens.primary.primary100,
                    focus: kitColorsPaletteCssTokens.neutral.white,
                    disabled: 'initial',
                    danger: {
                        default: 'initial',
                        hover: kitColorsPaletteCssTokens.secondary.red.red100,
                        active: kitColorsPaletteCssTokens.secondary.red.red100,
                        focus: kitColorsPaletteCssTokens.neutral.white,
                        disabled: 'initial'
                    }
                },
                border: {
                    default: 'initial',
                    hover: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100,
                    active: kitColorsPaletteCssTokens.primary.primary100,
                    focus: kitColorsPaletteCssTokens.primary.primary400,
                    disabled: 'initial',
                    danger: {
                        default: 'initial',
                        hover: kitColorsPaletteCssTokens.secondary.red.red400,
                        active: kitColorsPaletteCssTokens.secondary.red.red400,
                        focus: kitColorsPaletteCssTokens.secondary.red.red400,
                        disabled: 'initial'
                    }
                }
            },
            typography: {
                fontWeight: typographyCssTokens.regularFontWeight,
                iconSize: {
                    xs: typographyCssTokens.fontSize7,
                    s: typographyCssTokens.fontSize6,
                    m: typographyCssTokens.fontSize5,
                    l: typographyCssTokens.fontSize4,
                    xl: typographyCssTokens.fontSize3
                }
            },
            compact: {
                border: {
                    radius: borderCssTokens.radius.s
                }
            }
        },
        grey: {
            colors: {
                typography: {
                    default: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500,
                    hover: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500,
                    active: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500,
                    focus: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500,
                    disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400,
                    danger: {
                        default: kitColorsPaletteCssTokens.secondary.red.red400,
                        disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400
                    }
                },
                background: {
                    default: 'initial',
                    hover: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100,
                    active: kitColorsPaletteCssTokens.primary.primary100,
                    focus: kitColorsPaletteCssTokens.neutral.white,
                    disabled: 'initial',
                    danger: {
                        default: 'initial',
                        hover: kitColorsPaletteCssTokens.secondary.red.red100,
                        active: kitColorsPaletteCssTokens.secondary.red.red100,
                        focus: kitColorsPaletteCssTokens.neutral.white,
                        disabled: 'initial'
                    }
                },
                border: {
                    default: 'initial',
                    hover: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100,
                    active: kitColorsPaletteCssTokens.primary.primary100,
                    focus: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500,
                    disabled: 'initial',
                    danger: {
                        default: 'initial',
                        hover: kitColorsPaletteCssTokens.secondary.red.red400,
                        active: kitColorsPaletteCssTokens.secondary.red.red400,
                        focus: kitColorsPaletteCssTokens.secondary.red.red400,
                        disabled: 'initial'
                    }
                }
            },
            typography: {
                fontWeight: typographyCssTokens.regularFontWeight,
                iconSize: {
                    xs: typographyCssTokens.fontSize7,
                    s: typographyCssTokens.fontSize6,
                    m: typographyCssTokens.fontSize5,
                    l: typographyCssTokens.fontSize4,
                    xl: typographyCssTokens.fontSize3
                }
            },
            compact: {
                border: {
                    radius: borderCssTokens.radius.s
                }
            }
        },
        black: {
            colors: {
                typography: {
                    default: kitColorsPaletteCssTokens.neutral.black,
                    hover: kitColorsPaletteCssTokens.neutral.black,
                    active: kitColorsPaletteCssTokens.neutral.black,
                    focus: kitColorsPaletteCssTokens.neutral.black,
                    disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400,
                    danger: {
                        default: kitColorsPaletteCssTokens.secondary.red.red400,
                        disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400
                    }
                },
                background: {
                    default: 'initial',
                    hover: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100,
                    active: kitColorsPaletteCssTokens.primary.primary100,
                    focus: kitColorsPaletteCssTokens.neutral.white,
                    disabled: 'initial',
                    danger: {
                        default: 'initial',
                        hover: kitColorsPaletteCssTokens.secondary.red.red100,
                        active: kitColorsPaletteCssTokens.secondary.red.red100,
                        focus: kitColorsPaletteCssTokens.neutral.white,
                        disabled: 'initial'
                    }
                },
                border: {
                    default: 'initial',
                    hover: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100,
                    active: kitColorsPaletteCssTokens.primary.primary100,
                    focus: kitColorsPaletteCssTokens.neutral.black,
                    disabled: 'initial',
                    danger: {
                        default: 'initial',
                        hover: kitColorsPaletteCssTokens.secondary.red.red400,
                        active: kitColorsPaletteCssTokens.secondary.red.red400,
                        focus: kitColorsPaletteCssTokens.secondary.red.red400,
                        disabled: 'initial'
                    }
                }
            },
            typography: {
                fontWeight: typographyCssTokens.regularFontWeight,
                iconSize: {
                    xs: typographyCssTokens.fontSize7,
                    s: typographyCssTokens.fontSize6,
                    m: typographyCssTokens.fontSize5,
                    l: typographyCssTokens.fontSize4,
                    xl: typographyCssTokens.fontSize3
                }
            },
            compact: {
                border: {
                    radius: borderCssTokens.radius.s
                }
            }
        }
    },
    link: {
        colors: {
            typography: {
                default: kitColorsPaletteCssTokens.primary.primary400,
                hover: kitColorsPaletteCssTokens.primary.primary400,
                active: kitColorsPaletteCssTokens.primary.primary400,
                focus: kitColorsPaletteCssTokens.primary.primary400,
                disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400,
                danger: {
                    default: kitColorsPaletteCssTokens.secondary.red.red400,
                    disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400
                }
            },
            background: {
                default: kitColorsPaletteCssTokens.neutral.white,
                hover: kitColorsPaletteCssTokens.neutral.white,
                active: kitColorsPaletteCssTokens.neutral.white,
                focus: kitColorsPaletteCssTokens.neutral.white,
                disabled: kitColorsPaletteCssTokens.neutral.white,
                danger: {
                    default: kitColorsPaletteCssTokens.neutral.white,
                    hover: kitColorsPaletteCssTokens.neutral.white,
                    active: kitColorsPaletteCssTokens.neutral.white,
                    focus: kitColorsPaletteCssTokens.neutral.white,
                    disabled: kitColorsPaletteCssTokens.neutral.white
                }
            },
            border: {
                default: kitColorsPaletteCssTokens.primary.primary400,
                hover: kitColorsPaletteCssTokens.primary.primary400,
                active: kitColorsPaletteCssTokens.primary.primary400,
                focus: kitColorsPaletteCssTokens.primary.primary400,
                disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200,
                danger: {
                    default: kitColorsPaletteCssTokens.secondary.red.red400,
                    hover: kitColorsPaletteCssTokens.secondary.red.red400,
                    active: kitColorsPaletteCssTokens.secondary.red.red400,
                    focus: kitColorsPaletteCssTokens.secondary.red.red400,
                    disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200
                }
            }
        },
        typography: {
            fontWeight: typographyCssTokens.regularFontWeight,
            iconSize: {
                xs: typographyCssTokens.fontSize7,
                s: typographyCssTokens.fontSize6,
                m: typographyCssTokens.fontSize5,
                l: typographyCssTokens.fontSize4,
                xl: typographyCssTokens.fontSize3
            }
        },
        compact: {
            border: {
                radius: borderCssTokens.radius.s
            }
        }
    },
    segmented: {
        default: {
            colors: {
                typography: {
                    default: kitColorsPaletteCssTokens.primary.primary500,
                    hover: kitColorsPaletteCssTokens.primary.primary500,
                    active: kitColorsPaletteCssTokens.primary.primary500,
                    focus: kitColorsPaletteCssTokens.primary.primary500,
                    disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400,
                    danger: {
                        default: kitColorsPaletteCssTokens.secondary.red.red500,
                        disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400
                    },
                    iconCheck: kitColorsPaletteCssTokens.primary.primary400
                },
                background: {
                    default: kitColorsPaletteCssTokens.neutral.white,
                    hover: kitColorsPaletteCssTokens.neutral.white,
                    active: kitColorsPaletteCssTokens.primary.primary100,
                    focus: kitColorsPaletteCssTokens.neutral.white,
                    disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100,
                    danger: {
                        default: kitColorsPaletteCssTokens.neutral.white,
                        hover: kitColorsPaletteCssTokens.neutral.white,
                        active: kitColorsPaletteCssTokens.secondary.red.red100,
                        focus: kitColorsPaletteCssTokens.neutral.white,
                        disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100
                    }
                },
                border: {
                    default: kitColorsPaletteCssTokens.primary.primary100,
                    hover: kitColorsPaletteCssTokens.primary.primary400,
                    active: kitColorsPaletteCssTokens.primary.primary400,
                    focus: kitColorsPaletteCssTokens.primary.primary400,
                    disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200,
                    danger: {
                        default: kitColorsPaletteCssTokens.secondary.red.red100,
                        hover: kitColorsPaletteCssTokens.secondary.red.red400,
                        active: kitColorsPaletteCssTokens.secondary.red.red400,
                        focus: kitColorsPaletteCssTokens.secondary.red.red400,
                        disabled: kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200
                    }
                }
            },
            typography: {
                fontWeight: typographyCssTokens.regularFontWeight,
                iconSize: {
                    xs: typographyCssTokens.fontSize7,
                    s: typographyCssTokens.fontSize6,
                    m: typographyCssTokens.fontSize5,
                    l: typographyCssTokens.fontSize4,
                    xl: typographyCssTokens.fontSize3
                }
            },
            compact: {
                border: {
                    radius: borderCssTokens.radius.s
                }
            }
        },
        ...segmentedColorsCssTokens
    }
};
