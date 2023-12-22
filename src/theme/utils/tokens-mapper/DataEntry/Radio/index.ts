import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {kitRadioCssTokens} from '@theme/aristid/components/DataEntry/Radio';
import {typographyCssTokens} from '@theme/aristid/general/typography';

export const radioKitTokenToAntdToken = {
    fontFamily: `var(${kitRadioCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    fontSizeLG: KitAristidThemeGeneral.typography.fontSize4
};
