import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitProgressTheme} from '@theme/types/components/Feedback/Progress';

const {colors, typography} = KitAristidThemeGeneral;

export const KitProgressTheme: IKitProgressTheme = {
    colors: {
        background: colors.neutral.background,
        progress: {
            info: colors.primary.blue400,
            success: colors.secondary.green.green400,
            error: colors.secondary.red.red400
        }
    },
    typography: {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize7
    },
    circle: {
        typography: {
            fontWeight: typography.boldFontWeight,
            fontSize: typography.fontSize2
        }
    }
};
