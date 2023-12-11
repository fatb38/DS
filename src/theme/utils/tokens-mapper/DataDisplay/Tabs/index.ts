import {kitTabsCssTokens} from '@theme/aristid/components/DataDisplay/Tabs';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {spacingCssTokens} from '@theme/aristid/general/spacing';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {borderCssTokens} from '@theme/aristid/general/border';

export const tabsKitTokenToAntdToken = {
    fontFamily: `var(${kitTabsCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    titleFontSizeSM:
        `calc(var(${kitTabsCssTokens.typography.fontSize.s}, var(${typographyCssTokens.fontSize5})) * 1px)` as unknown as number,
    titleFontSize:
        `calc(var(${kitTabsCssTokens.typography.fontSize.m}, var(${typographyCssTokens.fontSize5})) * 1px)` as unknown as number,
    titleFontSizeLG:
        `calc(var(${kitTabsCssTokens.typography.fontSize.l}, var(${typographyCssTokens.fontSize5})) * 1px)` as unknown as number,
    cardBg: `var(${kitTabsCssTokens.card.colors.background.default}, var(${kitColorsPaletteCssTokens.neutral.grey.grey100}))`,
    colorBorderSecondary: `var(${kitTabsCssTokens.card.colors.border.default}, var(${kitColorsPaletteCssTokens.neutral.grey.grey300}))`,
    inkBarColor: `var(${kitTabsCssTokens.card.colors.border.active}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
    cardPadding: `calc(var(${kitTabsCssTokens.card.padding.vertical}, var(${spacingCssTokens.xs})) * 1px) calc(var(${kitTabsCssTokens.card.padding.horizontal}, var(${spacingCssTokens.s})) * 1px)`,
    cardPaddingLG: `calc(var(${kitTabsCssTokens.card.padding.vertical}, var(${spacingCssTokens.xs})) * 1px) calc(var(${kitTabsCssTokens.card.padding.horizontal}, var(${spacingCssTokens.s})) * 1px)`,
    cardPaddingSM: `calc(var(${kitTabsCssTokens.card.padding.vertical}, var(${spacingCssTokens.xs})) * 1px) calc(var(${kitTabsCssTokens.card.padding.horizontal}, var(${spacingCssTokens.s})) * 1px)`,
    borderRadius:
        `calc(var(${kitTabsCssTokens.card.border.radius}, var(${borderCssTokens.radius.xxs})) * 1px)` as unknown as number,
    colorTextDisabled: `var(${kitTabsCssTokens.typography.colors.disabled}, var(${kitColorsPaletteCssTokens.neutral.grey.grey300}))`,
    itemActiveColor: `var(${kitTabsCssTokens.typography.colors.active}, var(${kitColorsPaletteCssTokens.primary.primary600}))`,
    itemHoverColor: `var(${kitTabsCssTokens.typography.colors.hover}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
    itemSelectedColor: `var(${kitTabsCssTokens.typography.colors.selected}, var(${kitColorsPaletteCssTokens.primary.primary400}))`
};
