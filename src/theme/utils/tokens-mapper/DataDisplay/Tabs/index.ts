import {kitTabsCssTokens} from '@theme/aristid/components/DataDisplay/Tabs';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';

export const tabsKitTokenToAntdToken = {
    fontFamily: `var(${kitTabsCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    cardBg: `var(${kitTabsCssTokens.card.colors.background.default}, var(${kitColorsPaletteCssTokens.neutral.grey.grey100}))`,
    colorBorderSecondary: `var(${kitTabsCssTokens.card.colors.border.default}, var(${kitColorsPaletteCssTokens.neutral.grey.grey300}))`,
    inkBarColor: `var(${kitTabsCssTokens.card.colors.border.active}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
    colorTextDisabled: `var(${kitTabsCssTokens.typography.colors.disabled}, var(${kitColorsPaletteCssTokens.neutral.grey.grey300}))`,
    itemActiveColor: `var(${kitTabsCssTokens.typography.colors.active}, var(${kitColorsPaletteCssTokens.primary.primary600}))`,
    itemHoverColor: `var(${kitTabsCssTokens.typography.colors.hover}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
    itemSelectedColor: `var(${kitTabsCssTokens.typography.colors.selected}, var(${kitColorsPaletteCssTokens.primary.primary400}))`
};
