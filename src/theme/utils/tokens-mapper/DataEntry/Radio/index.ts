import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {kitRadioCssTokens} from '@theme/aristid/components/DataEntry/Radio';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {IKitRadioTheme} from '@theme/types/components/DataEntry/Radio';

export const radioKitTokenToAntdToken = (kitRadioTheme: IKitRadioTheme) => ({
    fontFamily: `var(${kitRadioCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    fontSize: kitRadioTheme.typography.fontSize,
    lineHeight: kitRadioTheme.typography.lineHeight,
    fontSizeLG: KitAristidThemeGeneral.typography.fontSize4
});
