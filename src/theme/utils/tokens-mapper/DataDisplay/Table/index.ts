import {spacingCssTokens} from '@theme/aristid/general/spacing';

export const tableKitTokenToAntdToken = {
    cellPaddingInline: `calc(var(${spacingCssTokens.xxs}) * 1px)` as unknown as number,
    cellPaddingBlock: `calc(var(${spacingCssTokens.xxs}) * 1px)` as unknown as number
};
