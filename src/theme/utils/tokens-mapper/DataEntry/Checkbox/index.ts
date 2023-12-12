import {kitCheckboxCssTokens} from '@theme/aristid/components/DataEntry/Checkbox';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {borderCssTokens} from '@theme/aristid/general/border';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';

export const mapCheckboxKitTokenToAntdToken = {
    fontFamily: `var(${kitCheckboxCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    fontSize:
        `calc(var(${kitCheckboxCssTokens.typography.fontSize}, var(${typographyCssTokens.fontSize5})) * 1px)` as unknown as number,
    fontSizeLG:
        `calc(var(${kitCheckboxCssTokens.typography.fontSize}, var(${typographyCssTokens.fontSize5})) * 1px)` as unknown as number,
    lineHeight:
        `var(${kitCheckboxCssTokens.typography.lineHeight}, var(${typographyCssTokens.lineHeight5}))` as unknown as number,
    borderRadiusSM:
        `calc(var(${kitCheckboxCssTokens.border.radius}, var(${borderCssTokens.radius.xs})) * 1px)` as unknown as number,
    colorBorder: `var(${kitCheckboxCssTokens.colors.border.default}, var(${kitColorsPaletteCssTokens.neutral.black60}))`,
    colorPrimary: `var(${kitCheckboxCssTokens.colors.background.check}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
    colorPrimaryHover: `var(${kitCheckboxCssTokens.colors.background.hover}, var(${kitColorsPaletteCssTokens.primary.primary500}))`
};
