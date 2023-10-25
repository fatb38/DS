import {IKitThemeGeneral} from '@theme/types';
import {IKitColorPickerTheme} from '@theme/types/components/DataEntry/ColorPicker';

export const getKitColorPickerTokens = (generalTokens: IKitThemeGeneral): IKitColorPickerTheme => {
    const {colors, typography, border} = generalTokens;

    return {
        colors: {
            background: {
                default: colors.neutral.white,
                disabled: colors.secondary.mediumGrey.mediumGrey100
            },
            border: {
                default: colors.secondary.mediumGrey.mediumGrey200,
                hover: colors.primary.primary400,
                focused: colors.primary.primary400,
                disabled: colors.secondary.mediumGrey.mediumGrey200
            },
            typography: {
                default: colors.primary.primary300,
                disabled: colors.secondary.mediumGrey.mediumGrey400
            }
        },
        typography: {
            fontFamily: typography.fontFamily,
            fontSize: typography.fontSize5,
            fontWeight: typography.mediumfontWeight
        },
        border: {
            radius: border.radius.s
        },
        colorBlock: {
            border: {
                radius: border.radius.xs
            }
        },
        panel: {
            input: {
                typography: {
                    fontWeight: typography.mediumfontWeight
                },
                colors: {
                    prefix: {
                        default: colors.secondary.mediumGrey.mediumGrey500
                    }
                }
            },
            select: {
                typography: {
                    fontWeight: typography.mediumfontWeight
                },
                colors: {
                    typography: {
                        default: colors.primary.primary300
                    },
                    rafter: {
                        default: colors.secondary.mediumGrey.mediumGrey500
                    }
                }
            },
            preset: {
                typography: {
                    fontWeight: typography.boldFontWeight
                },
                colors: {
                    typography: {
                        default: colors.neutral.black
                    },
                    rafter: {
                        default: colors.neutral.black
                    },
                    empty: {
                        default: colors.secondary.mediumGrey.mediumGrey400
                    }
                }
            }
        }
    };
};
