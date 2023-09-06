import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {AntdThemeConfigWithRequiredComponents} from '@theme/types';
import {KitButtonThemeAntd, KitButtonThemeStyled} from '@theme/types/components/General/Button';

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
            disabled: colors.primary.blue200,
            ghost: colors.primary.blue400,
            danger: {
                default: colors.neutral.typography.white,
                disabled: colors.neutral.typography.white
            }
        },
        background: {
            default: colors.primary.blue400,
            hover: colors.primary.blue500,
            active: colors.primary.blue600,
            focus: colors.primary.blue400,
            disabled: colors.primary.blue100,
            ghost: colors.neutral.typography.white,
            danger: {
                default: colors.secondary.red.red400,
                hover: colors.secondary.red.red500,
                active: colors.secondary.red.red600,
                focus: colors.secondary.red.red400,
                disabled: colors.secondary.red.red200
            }
        },
        border: {
            default: colors.primary.blue400,
            hover: colors.primary.blue500,
            active: colors.primary.blue600,
            focus: colors.primary.blue400,
            disabled: colors.primary.blue100,
            danger: {
                default: colors.secondary.red.red400,
                hover: colors.secondary.red.red500,
                active: colors.secondary.red.red600,
                focus: colors.secondary.red.red400,
                disabled: colors.secondary.red.red200
            }
        }
    },
    typography: {
        fontWeight: typography.regularFontWeight,
        fontSizeBigIcon: typography.fontSize2
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
            disabled: colors.primary.blue200,
            danger: {
                default: colors.secondary.red.red400,
                disabled: colors.secondary.red.red200
            }
        },
        background: {
            default: colors.neutral.typography.white,
            hover: colors.neutral.typography.white,
            active: colors.primary.blue100,
            focus: colors.neutral.typography.white,
            disabled: colors.neutral.typography.white,
            danger: {
                default: colors.neutral.typography.white,
                hover: colors.neutral.typography.white,
                active: colors.secondary.red.red100,
                focus: colors.neutral.typography.white,
                disabled: colors.neutral.typography.white
            }
        },
        border: {
            default: colors.primary.blue100,
            hover: colors.primary.blue400,
            active: colors.primary.blue400,
            focus: colors.primary.blue400,
            disabled: colors.primary.blue100,
            danger: {
                default: colors.secondary.red.red100,
                hover: colors.secondary.red.red400,
                active: colors.secondary.red.red400,
                focus: colors.secondary.red.red400,
                disabled: colors.secondary.red.red100
            }
        }
    },
    typography: {
        fontWeight: typography.regularFontWeight,
        fontSizeBigIcon: typography.fontSize2
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
            disabled: colors.primary.blue200,
            danger: {
                default: colors.secondary.red.red400,
                disabled: colors.secondary.red.red200
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
            disabled: colors.primary.blue100,
            danger: {
                default: colors.secondary.red.red400,
                hover: colors.secondary.red.red400,
                active: colors.secondary.red.red400,
                focus: colors.secondary.red.red400,
                disabled: colors.secondary.red.red100
            }
        }
    },
    typography: {
        fontWeight: typography.regularFontWeight,
        fontSizeBigIcon: typography.fontSize2
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
            disabled: colors.primary.blue200,
            danger: {
                default: colors.secondary.red.red500,
                disabled: colors.secondary.red.red200
            },
            iconCheck: colors.primary.blue400
        },
        background: {
            default: colors.neutral.typography.white,
            hover: colors.neutral.typography.white,
            active: colors.primary.blue100,
            focus: colors.neutral.typography.white,
            disabled: colors.primary.blue100,
            danger: {
                default: colors.neutral.typography.white,
                hover: colors.neutral.typography.white,
                active: colors.secondary.red.red100,
                focus: colors.neutral.typography.white,
                disabled: colors.secondary.red.red100
            }
        },
        border: {
            default: colors.primary.blue100,
            hover: colors.primary.blue400,
            active: colors.primary.blue400,
            focus: colors.primary.blue400,
            disabled: colors.primary.blue100,
            danger: {
                default: colors.secondary.red.red100,
                hover: colors.secondary.red.red400,
                active: colors.secondary.red.red400,
                focus: colors.secondary.red.red400,
                disabled: colors.secondary.red.red100
            }
        }
    },
    typography: {
        fontWeight: typography.regularFontWeight,
        fontSizeBigIcon: typography.fontSize3
    },
    compact: {
        border: {
            radius: border.radius.s
        }
    }
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
        ...kitSegmentedButtonThemeStyled
    }
};
