import {kitInputCssTokens} from '@theme/aristid/components/DataEntry/Input';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {utilitiesCssTokens} from '@theme/aristid/general/utilities';

export const inputKitTokenToAntdToken = {
    colorBgContainer: `var(${kitInputCssTokens.colors.background.default}, var(${utilitiesCssTokens.light}))`,
    colorBgContainerDisabled: `var(${kitInputCssTokens.colors.background.disabled}, var(${utilitiesCssTokens.neutral.neutralLight}))`,
    colorBorder: `var(${kitInputCssTokens.colors.border.default}, var(${utilitiesCssTokens.border}))`,
    colorPrimaryHover: `var(${kitInputCssTokens.colors.border.hover}, var(${utilitiesCssTokens.main.mainColor}))`,
    colorTextPlaceholder: `var(${kitInputCssTokens.colors.typography.placeholder.default}, var(${utilitiesCssTokens.text.textDisabled}))`,
    colorText: `var(${kitInputCssTokens.colors.typography.content.default}, var(${utilitiesCssTokens.text.textPrimary}))`,
    fontFamily: `var(${kitInputCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`
};
