import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {kitRadioCssTokens} from '@theme/aristid/components/DataEntry/Radio';
import {typographyCssTokens} from '@theme/aristid/general/typography';

export const radioKitTokenToAntdToken = {
    fontFamily: `var(${kitRadioCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    fontSize:
        `calc(var(${kitRadioCssTokens.typography.fontSize}, var(${typographyCssTokens.fontSize5})) * 1px)` as unknown as number,
    lineHeight: `var(${kitRadioCssTokens.typography.lineHeight}, var(${typographyCssTokens.lineHeight5}))` as unknown as number,
    fontSizeLG: KitAristidThemeGeneral.typography.fontSize4
};
