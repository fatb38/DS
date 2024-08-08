import {kitCheckboxCssTokens} from '@theme/aristid/components/DataEntry/Checkbox';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {utilitiesCssTokens} from '@theme/aristid/general/utilities';

export const checkboxKitTokenToAntdToken = {
    fontFamily: `var(${kitCheckboxCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    colorBorder: `var(${kitCheckboxCssTokens.colors.border.default}, var(${utilitiesCssTokens.border}))`,
    colorPrimary: `var(${kitCheckboxCssTokens.colors.background.check}, var(${utilitiesCssTokens.main.default}))`,
    colorPrimaryHover: `var(${kitCheckboxCssTokens.colors.background.hover}, var(${utilitiesCssTokens.main.dark}))`
};
