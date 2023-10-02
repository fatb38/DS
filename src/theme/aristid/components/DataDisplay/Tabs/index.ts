import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitTabsTheme} from '@theme/types/components/DataDisplay/Tabs';

const {colors, typography, border, spacing} = KitAristidThemeGeneral;

export const KitTabsTheme: IKitTabsTheme = {
    card: {
        colors: {
            background: {
                default: colors.neutral.gray.gray100
            },
            border: {
                default: colors.neutral.gray.gray300,
                active: colors.primary.blue400
            }
        },
        border: {
            radius: border.radius.xxs
        },
        padding: spacing.xs + 'px ' + spacing.s + 'px'
    },
    typography: {
        fontFamily: typography.fontFamily,
        fontSize: {
            s: typography.fontSize5,
            m: typography.fontSize5,
            l: typography.fontSize5
        },
        colors: {
            disabled: colors.neutral.gray.gray300,
            active: colors.primary.blue600,
            hover: colors.primary.blue400,
            selected: colors.primary.blue400
        }
    },
    extraContent: {
        colors: {
            border: {
                default: colors.neutral.gray.gray300
            },
            typography: {
                default: colors.neutral.typography.black
            }
        },
        border: {
            radius: border.radius.xxs
        },
        padding: spacing.xxs + 'px ' + spacing.s + 'px',
        margin: {
            vertical: spacing.xxs,
            horizontal: spacing.s
        }
    }
};
