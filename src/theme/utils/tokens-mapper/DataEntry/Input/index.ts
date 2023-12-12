import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {kitInputCssTokens} from '@theme/aristid/components/DataEntry/Input';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {IKitInputTheme} from '@theme/types/components/DataEntry/Input';

export const mapInputKitTokenToAntdToken = (kitInputTheme: IKitInputTheme) => ({
    colorBgContainer: `var(${kitInputCssTokens.colors.background.default}, var(${kitColorsPaletteCssTokens.neutral.white}))`,
    colorBgContainerDisabled: `var(${kitInputCssTokens.colors.background.disabled}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100}))`,
    colorBorder: `var(${kitInputCssTokens.colors.border.default}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200}))`,
    colorPrimaryHover: `var(${kitInputCssTokens.colors.border.hover}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
    colorTextPlaceholder: `var(${kitInputCssTokens.colors.typography.placeholder.default}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500}))`,
    colorText: `var(${kitInputCssTokens.colors.typography.content.default}, var(${kitColorsPaletteCssTokens.primary.primary300}))`,
    borderRadius: kitInputTheme.border.radius,
    fontFamily: `var(${kitInputCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    fontSize: kitInputTheme.typography.fontSize
});
