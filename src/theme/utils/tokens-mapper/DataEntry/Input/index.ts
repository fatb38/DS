import {kitInputCssTokens} from '@theme/aristid/components/DataEntry/Input';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {utilitiesCssTokens} from '@theme/aristid/general/utilities';

export const inputKitTokenToAntdToken = {
    colorBgContainer: `var(${kitInputCssTokens.colors.background.default}, var(${utilitiesCssTokens.light}))`,
    colorBgContainerDisabled: `var(${kitInputCssTokens.colors.background.disabled}, var(${utilitiesCssTokens.neutral.light}))`,
    colorBorder: `var(${kitInputCssTokens.colors.border.default}, var(${utilitiesCssTokens.border}))`,
    colorPrimaryHover: `var(${kitInputCssTokens.colors.border.hover}, var(${utilitiesCssTokens.main.default}))`,
    colorTextPlaceholder: `var(${kitInputCssTokens.colors.typography.placeholder.default}, var(${utilitiesCssTokens.text.disabled}))`,
    colorText: `var(${kitInputCssTokens.colors.typography.content.default}, var(${utilitiesCssTokens.text.primary}))`,
    fontFamily: `var(${kitInputCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`
};
