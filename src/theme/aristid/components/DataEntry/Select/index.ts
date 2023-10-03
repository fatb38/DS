import {IKitThemeGeneral} from '@theme/types';
import {
    IKitSelectColorBarTheme,
    IKitSelectDropDownTheme,
    IKitSelectTheme
} from '@theme/types/components/DataEntry/Select';

const getKitDropDownTokens = (generalTokens: IKitThemeGeneral): IKitSelectDropDownTheme => {
    const {colors, typography, border} = generalTokens;

    return {
        colors: {
            typography: {
                default: colors.secondary.mediumGrey.mediumGrey500,
                selected: colors.secondary.mediumGrey.mediumGrey500,
                active: colors.primary.primary400,
                group: colors.neutral.typography.black
            },
            background: {
                default: colors.secondary.mediumGrey.mediumGrey100,
                selected: colors.primary.primary100,
                active: colors.primary.primary100
            }
        },
        typography: {
            fontFamily: typography.fontFamily,
            fontWeight: {
                default: typography.mediumfontWeight,
                selected: typography.mediumfontWeight,
                active: typography.mediumfontWeight,
                group: typography.boldFontWeight
            }
        },
        border: {
            radius: border.radius.s
        }
    };
};

const getKitSelectColorBarTokens = (generalTokens: IKitThemeGeneral): IKitSelectColorBarTheme => {
    const {border} = generalTokens;
    return {
        height: 16,
        width: 16,
        border: {
            radius: border.radius.xxs
        }
    };
};

export const getKitSelectTokens = (generalTokens: IKitThemeGeneral): IKitSelectTheme => {
    const {colors, typography, border} = generalTokens;

    return {
        height: 40,
        border: {
            radius: border.radius.s
        },
        colors: {
            border: {
                hover: colors.primary.primary400,
                focused: colors.primary.primary400,
                disabled: colors.secondary.mediumGrey.mediumGrey200,
                warning: colors.secondary.orange.orange400,
                error: colors.secondary.red.red400
            },
            typography: {
                content: {
                    default: colors.primary.primary300,
                    disabled: colors.secondary.mediumGrey.mediumGrey400,
                    warning: colors.secondary.orange.orange500,
                    error: colors.secondary.red.red400
                },
                placeholder: {
                    default: colors.secondary.mediumGrey.mediumGrey500,
                    disabled: colors.secondary.mediumGrey.mediumGrey400,
                    warning: colors.secondary.orange.orange400,
                    error: colors.secondary.red.red400
                }
            },
            icon: {
                arrow: {
                    default: colors.secondary.mediumGrey.mediumGrey500,
                    disabled: colors.secondary.mediumGrey.mediumGrey400,
                    warning: colors.secondary.orange.orange400,
                    error: colors.secondary.red.red400
                },
                clear: {
                    default: colors.secondary.mediumGrey.mediumGrey500,
                    disabled: colors.secondary.mediumGrey.mediumGrey400,
                    warning: colors.secondary.orange.orange400,
                    error: colors.secondary.red.red400
                }
            },
            background: {
                default: colors.neutral.typography.white,
                disabled: colors.secondary.mediumGrey.mediumGrey100,
                warning: colors.secondary.orange.orange100,
                error: colors.secondary.red.red100
            }
        },
        typography: {
            fontFamily: typography.fontFamily,
            fontSize: typography.fontSize6,
            fontWeight: {
                content: typography.mediumfontWeight,
                placeholder: typography.regularFontWeight
            }
        },
        DropDown: getKitDropDownTokens(generalTokens),
        ColorBadge: getKitSelectColorBarTokens(generalTokens)
    };
};
