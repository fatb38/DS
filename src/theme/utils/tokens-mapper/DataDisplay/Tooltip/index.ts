import {kitTooltipCssToken} from '@theme/aristid/components/DataDisplay/Tooltip';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {IKitTooltipTheme} from '@theme/types/components/DataDisplay/Tooltip';

export const tooltipKitTokenToAntdToken = (kitTooltipTheme: IKitTooltipTheme) => ({
    colorBgSpotlight: `var(${kitTooltipCssToken.colors.background.default}, var(${kitColorsPaletteCssTokens.primary.primary600}))`,
    colorTextLightSolid: `var(${kitTooltipCssToken.colors.typography.default}, var(${kitColorsPaletteCssTokens.neutral.typography.white}))`,
    borderRadius: kitTooltipTheme.border.radius,
    fontSize: kitTooltipTheme.typography.fontSize,
    fontFamily: `var(${kitTooltipCssToken.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`
});
