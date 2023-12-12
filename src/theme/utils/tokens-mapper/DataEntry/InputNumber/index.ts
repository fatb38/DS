import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {kitInputNumberCssTokens} from '@theme/aristid/components/DataEntry/InputNumber';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {IKitInputNumberTheme} from '@theme/types/components/DataEntry/InputNumber';

export const inputNumberKitTokenToAntdToken = (kitInputNumberTheme: IKitInputNumberTheme) => ({
    colorBgContainer: `var(${kitInputNumberCssTokens.colors.background.default}, var(${kitColorsPaletteCssTokens.neutral.white}))`,
    colorBgContainerDisabled: `var(${kitInputNumberCssTokens.colors.background.disabled}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100}))`,
    colorBorder: `var(${kitInputNumberCssTokens.colors.border.default}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200}))`,
    colorPrimary: `var(${kitInputNumberCssTokens.colors.border.hover}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
    colorPrimaryHover: `var(${kitInputNumberCssTokens.colors.border.hover}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
    colorTextPlaceholder: `var(${kitInputNumberCssTokens.colors.typography.placeholder.default}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500}))`,
    colorText: `var(${kitInputNumberCssTokens.colors.typography.content.default}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey300}))`,
    borderRadius: kitInputNumberTheme.border.radius,
    fontFamily: `var(${kitInputNumberCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    fontSize: kitInputNumberTheme.typography.fontSize
});
