import {kitButtonCssTokens} from '@theme/aristid/components/General/Button';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {IKitButtonTheme} from '@theme/types/components/General/Button';

export const buttonKitTokenToAntdToken = (kitButtonTheme: IKitButtonTheme) => ({
    fontFamily: `var(${kitButtonCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    fontSize: kitButtonTheme.typography.fontSize,
    fontSizeLG: kitButtonTheme.typography.fontSize,
    lineHeight: kitButtonTheme.typography.lineHeight,
    borderRadius: kitButtonTheme.border.radius
});
