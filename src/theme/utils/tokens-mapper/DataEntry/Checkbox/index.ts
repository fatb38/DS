import {kitCheckboxCssTokens} from '@theme/aristid/components/DataEntry/Checkbox';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';

export const checkboxKitTokenToAntdToken = {
    fontFamily: `var(${kitCheckboxCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    colorBorder: `var(${kitCheckboxCssTokens.colors.border.default}, var(${kitColorsPaletteCssTokens.neutral.black60}))`,
    colorPrimary: `var(${kitCheckboxCssTokens.colors.background.check}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
    colorPrimaryHover: `var(${kitCheckboxCssTokens.colors.background.hover}, var(${kitColorsPaletteCssTokens.primary.primary500}))`
};
