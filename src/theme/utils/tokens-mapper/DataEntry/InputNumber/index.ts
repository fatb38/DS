import {kitInputNumberCssTokens} from '@theme/aristid/components/DataEntry/InputNumber';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {utilitiesCssTokens} from '@theme/aristid/general/utilities';

export const inputNumberKitTokenToAntdToken = {
    colorBgContainer: `var(${kitInputNumberCssTokens.colors.background.default}, var(${utilitiesCssTokens.light}))`,
    colorBgContainerDisabled: `var(${kitInputNumberCssTokens.colors.background.disabled}, var(${utilitiesCssTokens.neutral.light}))`,
    colorBorder: `var(${kitInputNumberCssTokens.colors.border.default}, var(${utilitiesCssTokens.border}))`,
    colorPrimary: `var(${kitInputNumberCssTokens.colors.border.hover}, var(${utilitiesCssTokens.main.default}))`,
    colorPrimaryHover: `var(${kitInputNumberCssTokens.colors.border.hover}, var(${utilitiesCssTokens.main.default}))`,
    colorTextPlaceholder: `var(${kitInputNumberCssTokens.colors.typography.placeholder.default}, var(${utilitiesCssTokens.text.disabled}))`,
    colorText: `var(${kitInputNumberCssTokens.colors.typography.content.default}, var(${utilitiesCssTokens.text.disabled}))`,
    fontFamily: `var(${kitInputNumberCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`
};
