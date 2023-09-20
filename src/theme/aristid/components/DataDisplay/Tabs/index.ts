import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {AntdThemeConfigWithRequiredComponents} from '@theme/types';
import {KitTabsThemeAntd, KitTabsThemeStyled} from '@theme/types/components/DataDisplay/Tabs';

const {colors, typography, border, spacing} = KitAristidThemeGeneral;

const kitTabsThemeAntd: KitTabsThemeAntd = {
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
    }
};

const kitTabsThemeStyled: KitTabsThemeStyled = {
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

const formatKitTokenForAntdDesignTolen = (
    kitTabsThemeAntd: KitTabsThemeAntd
): AntdThemeConfigWithRequiredComponents['Tabs'] => {
    const {card, typography} = kitTabsThemeAntd;

    return {
        fontFamily: typography.fontFamily,
        titleFontSizeSM: typography.fontSize.s,
        titleFontSize: typography.fontSize.m,
        titleFontSizeLG: typography.fontSize.l,
        cardBg: card.colors.background.default,
        colorBorderSecondary: card.colors.border.default,
        inkBarColor: card.colors.border.active,
        cardPadding: card.padding,
        cardPaddingLG: card.padding,
        cardPaddingSM: card.padding,
        borderRadius: card.border.radius,
        colorTextDisabled: typography.colors.disabled,
        itemActiveColor: typography.colors.active,
        itemHoverColor: typography.colors.hover,
        itemSelectedColor: typography.colors.selected
    };
};

export const KitTabsTheme = {
    ...formatKitTokenForAntdDesignTolen(kitTabsThemeAntd),
    ...kitTabsThemeStyled
};
