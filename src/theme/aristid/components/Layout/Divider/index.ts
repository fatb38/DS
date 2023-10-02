import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitDividerTheme} from '@theme/types/components/Layout/Divider';

const {colors, typography} = KitAristidThemeGeneral;

export const KitDividerTheme: IKitDividerTheme = {
    colors: {
        typography: {
            default: colors.neutral.typography.black
        },
        split: {
            default: colors.neutral.typography.black60,
            lightGrey: colors.secondary.mediumGrey.mediumGrey100
        }
    },
    typography: {
        fontWeight: typography.mediumfontWeight,
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize6,
        lineHeight: typography.lineHeight6
    }
};
