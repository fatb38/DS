import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {spacingCssTokens} from '@theme/aristid/general/spacing';

export const tableKitTokenToAntdToken = {
    headerColor: `var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey600})`,
    cellPaddingInline: `calc(var(${spacingCssTokens.xxs}) * 1px)` as unknown as number,
    cellPaddingBlock: `calc(var(${spacingCssTokens.xxs}) * 1px)` as unknown as number
};
