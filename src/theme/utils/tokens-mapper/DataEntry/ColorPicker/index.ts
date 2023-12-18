import {kitColorPickerCssTokens} from '@theme/aristid/components/DataEntry/ColorPicker';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {IKitColorPickerTheme} from '@theme/types/components/DataEntry/ColorPicker';

export const colorPickerKitTokenToAntdToken = (kitColorPickerTheme: IKitColorPickerTheme) => ({
    colorBgContainer: `var(${kitColorPickerCssTokens.colors.background.default}, var(${kitColorsPaletteCssTokens.neutral.white}))`,
    colorBgContainerDisabled: `var(${kitColorPickerCssTokens.colors.background.disabled}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100}))`,
    colorBorder: `var(${kitColorPickerCssTokens.colors.border.default}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200}))`,
    colorPrimary: `var(${kitColorPickerCssTokens.colors.border.hover}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
    colorPrimaryHover: `var(${kitColorPickerCssTokens.colors.border.hover}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
    colorText: `var(${kitColorPickerCssTokens.colors.typography.default}, var(${kitColorsPaletteCssTokens.primary.primary300}))`,
    borderRadius: kitColorPickerTheme.border.radius,
    fontFamily: `var(${kitColorPickerCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    fontSize: kitColorPickerTheme.typography.fontSize
});
