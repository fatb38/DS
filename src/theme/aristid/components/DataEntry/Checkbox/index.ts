import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitCheckboxTheme} from '@theme/types/components/DataEntry/Checkbox';

const {colors, typography, border} = KitAristidThemeGeneral;

export const KitCheckboxTheme: IKitCheckboxTheme = {
    colors: {
        background: {
            check: colors.primary.blue400,
            hover: colors.primary.blue500,
            focus: colors.neutral.typography.white,
            disabled: colors.secondary.mediumGrey.mediumGrey100,
            danger: {
                default: colors.secondary.red.red200,
                hover: colors.secondary.red.red500
            }
        },
        border: {
            default: colors.neutral.typography.black60,
            check: colors.primary.blue400,
            hover: colors.primary.blue400,
            focus: colors.primary.blue400,
            disabled: colors.secondary.mediumGrey.mediumGrey200,
            danger: {
                default: colors.secondary.red.red400,
                hover: colors.secondary.red.red500,
                focus: colors.secondary.red.red400
            }
        },
        typography: {
            disabled: colors.secondary.mediumGrey.mediumGrey400,
            danger: {
                disabled: colors.secondary.red.red200
            }
        }
    },
    typography: {
        fontWeight: typography.mediumfontWeight,
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize5,
        lineHeight: typography.lineHeight5,
        lineWidth: 1
    },
    border: {
        radius: border.radius.xs
    }
};
