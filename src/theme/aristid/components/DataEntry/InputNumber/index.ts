import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitInputNumberTheme} from '@theme/types/components/DataEntry/InputNumber';

const {colors, typography, border} = KitAristidThemeGeneral;

export const KitInputNumberTheme: IKitInputNumberTheme = {
    colors: {
        background: {
            default: colors.neutral.typography.white,
            disabled: colors.secondary.mediumGrey.mediumGrey100,
            error: colors.secondary.red.red100,
            warning: colors.secondary.orange.orange100
        },
        border: {
            default: colors.secondary.mediumGrey.mediumGrey200,
            hover: colors.primary.blue400,
            focused: colors.primary.blue400,
            disabled: colors.secondary.mediumGrey.mediumGrey200,
            error: colors.secondary.red.red400,
            warning: colors.secondary.orange.orange400
        },
        prefix: {
            default: colors.secondary.mediumGrey.mediumGrey500,
            disabled: colors.secondary.mediumGrey.mediumGrey400,
            error: colors.secondary.red.red400,
            warning: colors.secondary.orange.orange400
        },
        typography: {
            content: {
                default: colors.primary.blue300,
                disabled: colors.secondary.mediumGrey.mediumGrey400,
                error: colors.secondary.red.red400,
                warning: colors.secondary.orange.orange400
            },
            placeholder: {
                default: colors.secondary.mediumGrey.mediumGrey500,
                disabled: colors.secondary.mediumGrey.mediumGrey400,
                error: colors.secondary.red.red400,
                warning: colors.secondary.orange.orange400
            }
        }
    },
    typography: {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize5,
        content: {
            fontWeight: typography.mediumfontWeight
        },
        placeholder: {
            fontWeight: typography.regularFontWeight
        }
    },
    border: {
        radius: border.radius.s
    }
};
