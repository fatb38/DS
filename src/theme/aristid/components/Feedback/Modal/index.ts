import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitModalTheme} from '@theme/types/components/Feedback/Modal';

const {colors, typography, border, spacing} = KitAristidThemeGeneral;

export const KitModalTheme: IKitModalTheme = {
    typography: {
        fontFamily: typography.fontFamily,
        fontSize: {
            title: typography.fontSize4,
            content: typography.fontSize5
        },
        fontWeight: {
            title: typography.boldFontWeight,
            content: typography.regularFontWeight
        }
    },
    shadow: '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
    spacing: {
        vertical: {
            items: spacing.m,
            text: spacing.xs
        }
    },
    border: {
        radius: border.radius.s
    },
    colors: {
        background: {
            default: colors.neutral.typography.white,
            info: colors.primary.blue100,
            success: colors.secondary.green.green100,
            warning: colors.secondary.orange.orange100,
            error: colors.secondary.red.red100
        },
        icon: {
            info: colors.primary.blue400,
            success: colors.secondary.green.green400,
            warning: colors.secondary.orange.orange500,
            error: colors.secondary.red.red400
        }
    },
    Overlay: {
        colors: {
            background: {
                default: 'rgba(0,0,0,.45)'
            }
        }
    }
};
