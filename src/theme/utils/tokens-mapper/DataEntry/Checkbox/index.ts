import {kitCheckboxCssTokens} from '@theme/aristid/components/DataEntry/Checkbox';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {IKitCheckboxTheme} from '@theme/types/components/DataEntry/Checkbox';

export const mapCheckboxKitTokenToAntdToken = (kitCheckboxTheme: IKitCheckboxTheme) => ({
    fontFamily: `var(${kitCheckboxCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    fontSize: kitCheckboxTheme.typography.fontSize,
    fontSizeLG: kitCheckboxTheme.typography.fontSize,
    lineHeight: kitCheckboxTheme.typography.lineHeight,
    borderRadiusSM: kitCheckboxTheme.border.radius,
    colorBorder: `var(${kitCheckboxCssTokens.colors.border.default}, var(${kitColorsPaletteCssTokens.neutral.black60}))`,
    colorPrimary: `var(${kitCheckboxCssTokens.colors.background.check}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
    colorPrimaryHover: `var(${kitCheckboxCssTokens.colors.background.hover}, var(${kitColorsPaletteCssTokens.primary.primary500}))`
});
