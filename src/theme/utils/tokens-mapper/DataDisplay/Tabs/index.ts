import {kitTabsCssTokens} from '@theme/aristid/components/DataDisplay/Tabs';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {spacingCssTokens} from '@theme/aristid/general/spacing';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {IKitTabsTheme} from '@theme/types/components/DataDisplay/Tabs';

export const tabsKitTokenToAntdToken = (kitTabsTheme: IKitTabsTheme) => ({
    fontFamily: `var(${kitTabsCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    titleFontSizeSM: kitTabsTheme.typography.fontSize.s,
    titleFontSize: kitTabsTheme.typography.fontSize.m,
    titleFontSizeLG: kitTabsTheme.typography.fontSize.l,
    cardBg: `var(${kitTabsCssTokens.card.colors.background.default}, var(${kitColorsPaletteCssTokens.neutral.grey.grey100}))`,
    colorBorderSecondary: `var(${kitTabsCssTokens.card.colors.border.default}, var(${kitColorsPaletteCssTokens.neutral.grey.grey300}))`,
    inkBarColor: `var(${kitTabsCssTokens.card.colors.border.active}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
    cardPadding: `calc(var(${kitTabsCssTokens.card.padding.vertical}, var(${spacingCssTokens.xs})) * 1px) calc(var(${kitTabsCssTokens.card.padding.horizontal}, var(${spacingCssTokens.s})) * 1px)`,
    cardPaddingLG: `calc(var(${kitTabsCssTokens.card.padding.vertical}, var(${spacingCssTokens.xs})) * 1px) calc(var(${kitTabsCssTokens.card.padding.horizontal}, var(${spacingCssTokens.s})) * 1px)`,
    cardPaddingSM: `calc(var(${kitTabsCssTokens.card.padding.vertical}, var(${spacingCssTokens.xs})) * 1px) calc(var(${kitTabsCssTokens.card.padding.horizontal}, var(${spacingCssTokens.s})) * 1px)`,
    borderRadius: kitTabsTheme.card.border.radius,
    colorTextDisabled: `var(${kitTabsCssTokens.typography.colors.disabled}, var(${kitColorsPaletteCssTokens.neutral.grey.grey300}))`,
    itemActiveColor: `var(${kitTabsCssTokens.typography.colors.active}, var(${kitColorsPaletteCssTokens.primary.primary600}))`,
    itemHoverColor: `var(${kitTabsCssTokens.typography.colors.hover}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
    itemSelectedColor: `var(${kitTabsCssTokens.typography.colors.selected}, var(${kitColorsPaletteCssTokens.primary.primary400}))`
});
