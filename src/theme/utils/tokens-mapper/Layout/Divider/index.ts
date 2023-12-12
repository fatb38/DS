import {kitDividerCssTokens} from '@theme/aristid/components/Layout/Divider';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {IKitDividerTheme} from '@theme/types/components/Layout/Divider';

export const dividerKitTokenToAntdToken = (kitDividerTheme: IKitDividerTheme) => ({
    colorText: `var(${kitDividerCssTokens.colors.typography.default}, var(${kitColorsPaletteCssTokens.neutral.typography.black}))`,
    colorTextHeading: `var(${kitDividerCssTokens.colors.typography.default}, var(${kitColorsPaletteCssTokens.neutral.typography.black}))`,
    fontFamily: `var(${kitDividerCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    fontSize: kitDividerTheme.typography.fontSize,
    fontSizeLG: kitDividerTheme.typography.fontSize,
    lineHeight: kitDividerTheme.typography.lineHeight,
    colorSplit: `var(${kitDividerCssTokens.colors.split.default}, var(${kitColorsPaletteCssTokens.neutral.black60}))`
});
