import {kitTagCssTokens} from '@theme/aristid/components/DataDisplay/Tag';
import {borderCssTokens} from '@theme/aristid/general/border';

export const tagKitTokenToAntdToken = {
    borderRadiusSM:
        `calc(var(${kitTagCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px)` as unknown as number
};
