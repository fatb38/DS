import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {border} from '@theme/aristid/general/border';
import {KitCardThemeStyled} from '@theme/types/components/DataDisplay/Card';

const {colors, typography} = KitAristidThemeGeneral;

const kitCardThemeStyled: KitCardThemeStyled = {
    card: {
        colors: {
            background: {
                default: colors.neutral.typography.white,
                disabled: colors.primary.blue100
            },
            border: {
                default: 'transparent',
                hover: colors.primary.blue400
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
        width: 8,
        border: {
            radius: border.radius.s
        }
    },
    select: {
        colors: {
            background: {
                disabled: colors.primary.blue100
            },
            typography: {
                default: colors.primary.blue400,
                disabled: colors.primary.blue200
            }
        }
    },
    expend: {
        colors: {
            typography: {
                default: colors.primary.blue600,
                hover: colors.primary.blue400
            }
        }
    },
    image: {
        colors: {
            border: {
                default: colors.neutral.typography.black60
            }
        },
        border: {
            radius: border.radius.s
        }
    },
    icon: {
        colors: {
            border: {
                default: colors.neutral.typography.black60
            }
        },
        border: {
            radius: border.radius.s
        }
    },
    title: {
        colors: {
            typography: {
                default: colors.primary.blue600,
                disabled: colors.primary.blue200
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
                default: colors.primary.blue600,
                disabled: colors.primary.blue200
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
                default: colors.primary.blue600,
                disabled: colors.primary.blue200
            }
        },
        typography: {
            fontSize: typography.fontSize5,
            fontWeight: typography.boldFontWeight
        }
    }
};

export const KitCardTheme = {
    ...kitCardThemeStyled
};
