import {kitSelectCssTokens} from '@theme/aristid/components/DataEntry/Select';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {IKitSelectTheme} from '@theme/types/components/DataEntry/Select';

export const selectKitTokenToAntdToken = (kitSelectTheme: IKitSelectTheme) => ({
    borderRadius: kitSelectTheme.border.radius,
    controlHeight: kitSelectTheme.height,
    colorBgContainer: `var(${kitSelectCssTokens.colors.background.default}, var(${kitColorsPaletteCssTokens.neutral.white}))`,
    fontFamily: `var(${kitSelectCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    fontSize: kitSelectTheme.typography.fontSize
});
