import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitStepsTheme} from '@theme/types/components/Navigation/Steps';

const {colors, typography} = KitAristidThemeGeneral;

export const KitStepsTheme: IKitStepsTheme = {
    colors: {
        dot: {
            default: colors.primary.blue300
        },
        split: {
            default: colors.neutral.background
        },
        typography: {
            description: {
                default: colors.neutral.typography.black60,
                active: colors.primary.blue300
            },
            text: {
                default: colors.neutral.typography.black,
                active: colors.primary.blue300
            }
        }
    },
    typography: {
        fontfamily: typography.fontFamily,
        fontSize: typography.fontSize6
    }
};
