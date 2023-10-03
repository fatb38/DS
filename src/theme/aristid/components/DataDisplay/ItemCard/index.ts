import {IKitThemeGeneral} from '@theme/types';
import {IKitItemCardTheme} from '@theme/types/components/DataDisplay/ItemCard';

export const getKitItemCardTokens = (generalTokens: IKitThemeGeneral): IKitItemCardTheme => {
    const {colors, border, typography} = generalTokens;

    return {
        card: {
            colors: {
                background: {
                    default: colors.neutral.typography.white,
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
