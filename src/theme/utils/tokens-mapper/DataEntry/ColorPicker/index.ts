import {kitColorPickerCssTokens} from '@theme/aristid/components/DataEntry/ColorPicker';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {utilitiesCssTokens} from '@theme/aristid/general/utilities';

export const colorPickerKitTokenToAntdToken = {
    colorBgContainerDisabled: `var(${kitColorPickerCssTokens.colors.background.disabled}, var(${utilitiesCssTokens.neutral.light}))`,
    colorBorder: `var(${kitColorPickerCssTokens.colors.border.default}, var(${utilitiesCssTokens.border}))`,
    colorPrimaryHover: `var(${kitColorPickerCssTokens.colors.border.hover}, var(${utilitiesCssTokens.main.default}))`,
    colorText: `var(${kitColorPickerCssTokens.colors.typography.default}, var(${utilitiesCssTokens.text.primary}))`,
    fontFamily: `var(${kitColorPickerCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`
};
