import {kitDividerCssTokens} from '@theme/aristid/components/Layout/Divider';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';

export const dividerKitTokenToAntdToken = {
    colorText: `var(${kitDividerCssTokens.colors.typography.default}, var(${kitColorsPaletteCssTokens.neutral.typography.black}))`,
    colorTextHeading: `var(${kitDividerCssTokens.colors.typography.default}, var(${kitColorsPaletteCssTokens.neutral.typography.black}))`,
    fontFamily: `var(${kitDividerCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    colorSplit: `var(${kitDividerCssTokens.colors.split.default}, var(${kitColorsPaletteCssTokens.neutral.black60}))`
};
