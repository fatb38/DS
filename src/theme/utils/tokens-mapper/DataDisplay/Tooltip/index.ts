import {kitTooltipCssToken} from '@theme/aristid/components/DataDisplay/Tooltip';
import {borderCssTokens} from '@theme/aristid/general/border';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {utilitiesCssTokens} from '@theme/aristid/general/utilities';

export const tooltipKitTokenToAntdToken = {
    colorBgSpotlight: `var(${kitTooltipCssToken.colors.background.default}, var(${utilitiesCssTokens.main.deepDark}))`,
    colorlightSolid: `var(${kitTooltipCssToken.colors.typography.default}, var(${utilitiesCssTokens.text.light}))`,
    borderRadius:
        `calc(var(${kitTooltipCssToken.border.radius}, var(${borderCssTokens.radius.s})) * 1px)` as unknown as number,
    fontSize:
        `calc(var(${kitTooltipCssToken.typography.fontSize}, var(${typographyCssTokens.fontSize7})) * 1px)` as unknown as number,
    fontFamily: `var(${kitTooltipCssToken.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`
};
