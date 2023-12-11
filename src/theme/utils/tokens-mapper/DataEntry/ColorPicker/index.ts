import {kitColorPickerCssTokens} from '@theme/aristid/components/DataEntry/ColorPicker';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {borderCssTokens} from '@theme/aristid/general/border';
import {typographyCssTokens} from '@theme/aristid/general/typography';

export const colorPickerKitTokenToAntdToken = {
    colorBgContainer: `var(${kitColorPickerCssTokens.colors.background.default}, var(${kitColorsPaletteCssTokens.neutral.white}))`,
    colorBgContainerDisabled: `var(${kitColorPickerCssTokens.colors.background.disabled}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100}))`,
    colorBorder: `var(${kitColorPickerCssTokens.colors.border.default}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200}))`,
    colorPrimary: `var(${kitColorPickerCssTokens.colors.border.hover}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
    colorPrimaryHover: `var(${kitColorPickerCssTokens.colors.border.hover}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
    colorText: `var(${kitColorPickerCssTokens.colors.typography.default}, var(${kitColorsPaletteCssTokens.primary.primary300}))`,
    borderRadius: `calc(var(${kitColorPickerCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px)` as unknown as number,
    fontFamily: `var(${kitColorPickerCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    fontSize: `calc(var(${kitColorPickerCssTokens.typography.fontSize}, var(${typographyCssTokens.fontSize5})) * 1px)` as unknown as number
};
