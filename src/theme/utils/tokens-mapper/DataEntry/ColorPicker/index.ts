import {kitColorPickerCssTokens} from '@theme/aristid/components/DataEntry/ColorPicker';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';

export const colorPickerKitTokenToAntdToken = {
    colorBgContainer: `var(${kitColorPickerCssTokens.colors.background.default}, var(${kitColorsPaletteCssTokens.neutral.white}))`,
    colorBgContainerDisabled: `var(${kitColorPickerCssTokens.colors.background.disabled}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100}))`,
    colorBorder: `var(${kitColorPickerCssTokens.colors.border.default}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200}))`,
    colorPrimary: `var(${kitColorPickerCssTokens.colors.border.hover}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
    colorPrimaryHover: `var(${kitColorPickerCssTokens.colors.border.hover}, var(${kitColorsPaletteCssTokens.neutral.grey.grey400}))`,
    colorText: `var(${kitColorPickerCssTokens.colors.typography.default}, var(${kitColorsPaletteCssTokens.neutral.grey.grey600}))`,
    fontFamily: `var(${kitColorPickerCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`
};
