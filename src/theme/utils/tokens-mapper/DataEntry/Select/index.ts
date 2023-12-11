import {kitSelectCssTokens} from '@theme/aristid/components/DataEntry/Select';
import {borderCssTokens} from '@theme/aristid/general/border';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';

export const selectKitTokenToAntdToken = {
    borderRadius:
        `calc(var(${kitSelectCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px)` as unknown as number,
    controlHeight: `calc(var(${kitSelectCssTokens.height}, 40) * 1px)` as unknown as number,
    colorBgContainer: `var(${kitSelectCssTokens.colors.background.default}, var(${kitColorsPaletteCssTokens.neutral.white}))`,
    fontFamily: `var(${kitSelectCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    fontSize: `calc(var(${kitSelectCssTokens.typography.fontSize}, var(${typographyCssTokens.fontSize6})) * 1px)` as unknown as number
};
