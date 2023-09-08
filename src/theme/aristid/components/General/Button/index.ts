import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {AntdThemeConfigWithRequiredComponents} from '@theme/types';
import {
    KitButtonThemeAntd,
    KitButtonThemeStyled,
    KitColoredSegmentedButtonThemesStyled
} from '@theme/types/components/General/Button';
import {KitColorKeys} from '@theme/types/general/colors';

const {colors, typography, border} = KitAristidThemeGeneral;

const kitButtonThemeAntd: KitButtonThemeAntd = {
    typography: {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize5,
        lineHeight: typography.lineHeight5
    },
    border: {
        radius: border.radius.pills
    }
};

const kitPrimaryButtonThemeStyled: KitButtonThemeStyled = {
    colors: {
        typography: {
            default: colors.neutral.typography.white,
            hover: colors.neutral.typography.white,
            active: colors.neutral.typography.white,
            focus: colors.neutral.typography.white,
            disabled: colors.secondary.mediumGrey.mediumGrey400,
            ghost: colors.primary.blue400,
            danger: {
                default: colors.neutral.typography.white,
                disabled: colors.secondary.mediumGrey.mediumGrey400
            }
        },
        background: {
            default: colors.primary.blue400,
            hover: colors.primary.blue500,
            active: colors.primary.blue600,
            focus: colors.primary.blue400,
            disabled: colors.secondary.mediumGrey.mediumGrey100,
            ghost: colors.neutral.typography.white,
            danger: {
                default: colors.secondary.red.red400,
                hover: colors.secondary.red.red500,
                active: colors.secondary.red.red600,
                focus: colors.secondary.red.red400,
                disabled: colors.secondary.mediumGrey.mediumGrey100
            }
        },
        border: {
            default: colors.primary.blue400,
            hover: colors.primary.blue500,
            active: colors.primary.blue600,
            focus: colors.primary.blue400,
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

const kitDefaultButtonThemeStyled: KitButtonThemeStyled = {
    colors: {
        typography: {
            default: colors.primary.blue400,
            hover: colors.primary.blue400,
            active: colors.primary.blue400,
            focus: colors.primary.blue400,
            disabled: colors.secondary.mediumGrey.mediumGrey400,
            danger: {
                default: colors.secondary.red.red400,
                disabled: colors.secondary.mediumGrey.mediumGrey400
            }
        },
        background: {
            default: colors.neutral.typography.white,
            hover: colors.neutral.typography.white,
            active: colors.primary.blue100,
            focus: colors.neutral.typography.white,
            disabled: colors.secondary.mediumGrey.mediumGrey100,
            danger: {
                default: colors.neutral.typography.white,
                hover: colors.neutral.typography.white,
                active: colors.secondary.red.red100,
                focus: colors.neutral.typography.white,
                disabled: colors.secondary.mediumGrey.mediumGrey100
            }
        },
        border: {
            default: colors.primary.blue100,
            hover: colors.primary.blue400,
            active: colors.primary.blue400,
            focus: colors.primary.blue400,
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

const kitLinkButtonThemeStyled: KitButtonThemeStyled = {
    colors: {
        typography: {
            default: colors.primary.blue400,
            hover: colors.primary.blue400,
            active: colors.primary.blue400,
            focus: colors.primary.blue400,
            disabled: colors.secondary.mediumGrey.mediumGrey400,
            danger: {
                default: colors.secondary.red.red400,
                disabled: colors.secondary.mediumGrey.mediumGrey400
            }
        },
        background: {
            default: colors.neutral.typography.white,
            hover: colors.neutral.typography.white,
            active: colors.neutral.typography.white,
            focus: colors.neutral.typography.white,
            disabled: colors.neutral.typography.white,
            danger: {
                default: colors.neutral.typography.white,
                hover: colors.neutral.typography.white,
                active: colors.neutral.typography.white,
                focus: colors.neutral.typography.white,
                disabled: colors.neutral.typography.white
            }
        },
        border: {
            default: colors.primary.blue400,
            hover: colors.primary.blue400,
            active: colors.primary.blue400,
            focus: colors.primary.blue400,
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

const kitSegmentedButtonThemeStyled: KitButtonThemeStyled = {
    colors: {
        typography: {
            default: colors.primary.blue500,
            hover: colors.primary.blue500,
            active: colors.primary.blue500,
            focus: colors.primary.blue500,
            disabled: colors.secondary.mediumGrey.mediumGrey400,
            danger: {
                default: colors.secondary.red.red500,
                disabled: colors.secondary.mediumGrey.mediumGrey400
            },
            iconCheck: colors.primary.blue400
        },
        background: {
            default: colors.neutral.typography.white,
            hover: colors.neutral.typography.white,
            active: colors.primary.blue100,
            focus: colors.neutral.typography.white,
            disabled: colors.secondary.mediumGrey.mediumGrey100,
            danger: {
                default: colors.neutral.typography.white,
                hover: colors.neutral.typography.white,
                active: colors.secondary.red.red100,
                focus: colors.neutral.typography.white,
                disabled: colors.secondary.mediumGrey.mediumGrey100
            }
        },
        border: {
            default: colors.primary.blue100,
            hover: colors.primary.blue400,
            active: colors.primary.blue400,
            focus: colors.primary.blue400,
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

const generateColoredSegmentedButtonThemesStyled = (): KitColoredSegmentedButtonThemesStyled => {
    const colorKeys: KitColorKeys[] = Object.keys(colors.secondary) as KitColorKeys[];
    const colorThemes = {} as KitColoredSegmentedButtonThemesStyled;

    for (const color of colorKeys) {
        colorThemes[color] = {
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
                    default: colors.neutral.typography.white,
                    hover: colors.neutral.typography.white,
                    active: colors.secondary[color][color + '100'],
                    focus: colors.neutral.typography.white,
                    disabled: colors.secondary.mediumGrey.mediumGrey100,
                    danger: {
                        default: colors.neutral.typography.white,
                        hover: colors.neutral.typography.white,
                        active: colors.secondary.red.red100,
                        focus: colors.neutral.typography.white,
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
    }

    return colorThemes;
};

const formatKitTokenForAntdDesignTolen = (
    kitButtonThemeAntd: KitButtonThemeAntd
): AntdThemeConfigWithRequiredComponents['Button'] => {
    const {typography, border} = kitButtonThemeAntd;

    return {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize,
        fontSizeLG: typography.fontSize,
        lineHeight: typography.lineHeight,
        borderRadius: border.radius
    };
};

export const KitButtonTheme = {
    ...formatKitTokenForAntdDesignTolen(kitButtonThemeAntd),
    primary: {
        ...kitPrimaryButtonThemeStyled
    },
    default: {
        ...kitDefaultButtonThemeStyled
    },
    link: {
        ...kitLinkButtonThemeStyled
    },
    segmented: {
        default: {
            ...kitSegmentedButtonThemeStyled
        },
        ...generateColoredSegmentedButtonThemesStyled()
    }
};
