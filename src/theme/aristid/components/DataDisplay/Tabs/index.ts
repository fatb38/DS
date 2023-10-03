import {IKitThemeGeneral} from '@theme/types';
import {IKitTabsTheme} from '@theme/types/components/DataDisplay/Tabs';

export const getKitTabsTokens = (generalTokens: IKitThemeGeneral): IKitTabsTheme => {
    const {colors, typography, border, spacing} = generalTokens;

    return {
        card: {
            colors: {
                background: {
                    default: colors.neutral.gray.gray100
                },
                border: {
                    default: colors.neutral.gray.gray300,
                    active: colors.primary.primary400
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
                active: colors.primary.primary600,
                hover: colors.primary.primary400,
                selected: colors.primary.primary400
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
};
