import {kitTabsCssTokens} from '@theme/aristid/components/DataDisplay/Tabs';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {utilitiesCssTokens} from '@theme/aristid/general/utilities';

export const tabsKitTokenToAntdToken = {
    fontFamily: `var(${kitTabsCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    cardBg: `var(${kitTabsCssTokens.card.colors.background.default}, var(${utilitiesCssTokens.neutral.light}))`,
    colorBorderSecondary: `var(${kitTabsCssTokens.card.colors.border.default}, var(${utilitiesCssTokens.border}))`,
    inkBarColor: `var(${kitTabsCssTokens.card.colors.border.active}, var(${utilitiesCssTokens.main.default}))`,
    colorTextDisabled: `var(${kitTabsCssTokens.typography.colors.disabled}, var(${utilitiesCssTokens.text.disabled}))`,
    itemActiveColor: `var(${kitTabsCssTokens.typography.colors.active}, var(${utilitiesCssTokens.main.deepDark}))`,
    itemHoverColor: `var(${kitTabsCssTokens.typography.colors.hover}, var(${utilitiesCssTokens.main.default}))`,
    itemSelectedColor: `var(${kitTabsCssTokens.typography.colors.selected}, var(${utilitiesCssTokens.main.default}))`
};
