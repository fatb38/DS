import {kitInputNumberCssTokens} from '@theme/aristid/components/DataEntry/InputNumber';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';

export const inputNumberKitTokenToAntdToken = {
    colorBgContainer: `var(${kitInputNumberCssTokens.colors.background.default}, var(${kitColorsPaletteCssTokens.neutral.white}))`,
    colorBgContainerDisabled: `var(${kitInputNumberCssTokens.colors.background.disabled}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100}))`,
    colorBorder: `var(${kitInputNumberCssTokens.colors.border.default}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200}))`,
    colorPrimary: `var(${kitInputNumberCssTokens.colors.border.hover}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
    colorPrimaryHover: `var(${kitInputNumberCssTokens.colors.border.hover}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
    colorTextPlaceholder: `var(${kitInputNumberCssTokens.colors.typography.placeholder.default}, var(${kitColorsPaletteCssTokens.neutral.grey.grey400}))`,
    colorText: `var(${kitInputNumberCssTokens.colors.typography.content.default}, var(${kitColorsPaletteCssTokens.neutral.grey.grey600}))`,
    fontFamily: `var(${kitInputNumberCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`
};
