import {kitTooltipCssToken} from '@theme/aristid/components/DataDisplay/Tooltip';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {borderCssTokens} from '@theme/aristid/general/border';

export const tooltipKitTokenToAntdToken = {
    colorBgSpotlight: `var(${kitTooltipCssToken.colors.background.default}, var(${kitColorsPaletteCssTokens.primary.primary600}))`,
    colorTextLightSolid: `var(${kitTooltipCssToken.colors.typography.default}, var(${kitColorsPaletteCssTokens.neutral.typography.white}))`,
    borderRadius:
        `calc(var(${kitTooltipCssToken.border.radius}, var(${borderCssTokens.radius.s})) * 1px)` as unknown as number,
    fontSize:
        `calc(var(${kitTooltipCssToken.typography.fontSize}, var(${typographyCssTokens.fontSize7})) * 1px)` as unknown as number,
    fontFamily: `var(${kitTooltipCssToken.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`
};
