import {kitButtonCssTokens} from '@theme/aristid/components/General/Button';
import {borderCssTokens} from '@theme/aristid/general/border';
import {typographyCssTokens} from '@theme/aristid/general/typography';

export const buttonKitTokenToAntdToken = {
    fontFamily: `var(${kitButtonCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    fontSize:
        `calc(var(${kitButtonCssTokens.typography.fontSize}, var(${typographyCssTokens.fontSize5})) * 1px)` as unknown as number,
    fontSizeLG:
        `calc(var(${kitButtonCssTokens.typography.fontSize}, var(${typographyCssTokens.fontSize5})) * 1px)` as unknown as number,
    lineHeight:
        `var(${kitButtonCssTokens.typography.lineHeight}, var(${typographyCssTokens.lineHeight5}))` as unknown as number,
    borderRadius:
        `calc(var(${kitButtonCssTokens.border.radius}, var(${borderCssTokens.radius.pills})) * 1px)` as unknown as number
};
