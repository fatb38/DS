import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {
    IKitSelectColorBarTheme,
    IKitSelectDropDownTheme,
    IKitSelectTheme
} from '@theme/types/components/DataEntry/Select';

const {colors, typography, border} = KitAristidThemeGeneral;

const kitDropDownTheme: IKitSelectDropDownTheme = {
    colors: {
        typography: {
            default: colors.secondary.mediumGrey.mediumGrey500,
            selected: colors.secondary.mediumGrey.mediumGrey500,
            active: colors.primary.blue400,
            group: colors.neutral.typography.black
        },
        background: {
            default: colors.secondary.mediumGrey.mediumGrey100,
            selected: colors.primary.blue100,
            active: colors.primary.blue100
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

const kitSelectColorBarTheme: IKitSelectColorBarTheme = {
    height: 16,
    width: 16,
    border: {
        radius: border.radius.xxs
    }
};

export const KitSelectTheme: IKitSelectTheme = {
    height: 40,
    border: {
        radius: border.radius.s
    },
    colors: {
        border: {
            hover: colors.primary.blue400,
            focused: colors.primary.blue400,
            disabled: colors.secondary.mediumGrey.mediumGrey200,
            warning: colors.secondary.orange.orange400,
            error: colors.secondary.red.red400
        },
        typography: {
            content: {
                default: colors.primary.blue300,
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
    DropDown: kitDropDownTheme,
    ColorBadge: kitSelectColorBarTheme
};
