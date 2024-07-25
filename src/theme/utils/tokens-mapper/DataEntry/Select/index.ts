import {kitSelectCssTokens} from '@theme/aristid/components/DataEntry/Select';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {utilitiesCssTokens} from '@theme/aristid/general/utilities';

export const selectKitTokenToAntdToken = {
    borderRadius: 8,
    controlHeight: 40,
    multipleItemHeight: 20,
    colorBgContainer: `var(${kitSelectCssTokens.colors.background.default}, var(${utilitiesCssTokens.light}))`,
    fontFamily: `var(${kitSelectCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    fontSize: 13
};
