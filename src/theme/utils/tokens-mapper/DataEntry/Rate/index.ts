import {kitRateCssTokens} from '@theme/aristid/components/DataEntry/Rate';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';

export const rateKitTokenToAntdToken = {
    starColor: `var(${kitRateCssTokens.colors.star.default}, var(${kitColorsPaletteCssTokens.tertiary.yellow[400]}))`
};
