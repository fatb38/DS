import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {border} from '@theme/aristid/general/border';
import {IKitItemCardThemeStyled} from '@theme/types/components/DataDisplay/ItemCard';

const {colors, typography} = KitAristidThemeGeneral;

const kitItemCardThemeStyled: IKitItemCardThemeStyled = {
    card: {
        colors: {
            background: {
                default: colors.neutral.typography.white,
                disabled: colors.secondary.mediumGrey.mediumGrey100
            },
            border: {
                default: colors.secondary.mediumGrey.mediumGrey200,
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
                default: colors.primary.blue400,
                disabled: colors.secondary.mediumGrey.mediumGrey400
            }
        }
    },
    expend: {
        colors: {
            typography: {
                default: colors.primary.blue600,
                hover: colors.primary.blue400,
                disabled: colors.secondary.mediumGrey.mediumGrey400
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
                default: colors.primary.blue600,
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
                default: colors.primary.blue600,
                disabled: colors.secondary.mediumGrey.mediumGrey400
            }
        },
        typography: {
            fontSize: typography.fontSize5,
            fontWeight: typography.boldFontWeight
        }
    }
};

export const KitItemCardTheme = {
    ...kitItemCardThemeStyled
};
