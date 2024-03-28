import {kitSelectCssTokens} from '@theme/aristid/components/DataEntry/Select';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';

export const selectKitTokenToAntdToken = {
    borderRadius: 8,
    controlHeight: 40,
    multipleItemHeight: 20,
    colorBgContainer: `var(${kitSelectCssTokens.colors.background.default}, var(${kitColorsPaletteCssTokens.neutral.white}))`,
    fontFamily: `var(${kitSelectCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    fontSize: 13
};
