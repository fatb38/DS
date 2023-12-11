import {kitDividerCssTokens} from '@theme/aristid/components/Layout/Divider';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';

export const dividerKitTokenToAntdToken = {
    colorText: `var(${kitDividerCssTokens.colors.typography.default}, var(${kitColorsPaletteCssTokens.neutral.typography.black}))`,
    colorTextHeading: `var(${kitDividerCssTokens.colors.typography.default}, var(${kitColorsPaletteCssTokens.neutral.typography.black}))`,
    fontFamily: `var(${kitDividerCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    fontSize:
        `calc(var(${kitDividerCssTokens.typography.fontSize}, var(${typographyCssTokens.fontSize6})) * 1px)` as unknown as number,
    fontSizeLG:
        `calc(var(${kitDividerCssTokens.typography.fontSize}, var(${typographyCssTokens.fontSize6})) * 1px)` as unknown as number,
    lineHeight:
        `var(${kitDividerCssTokens.typography.lineHeight}, var(${typographyCssTokens.lineHeight6}))` as unknown as number,
    colorSplit: `var(${kitDividerCssTokens.colors.split.default}, var(${kitColorsPaletteCssTokens.neutral.black60}))`
};
