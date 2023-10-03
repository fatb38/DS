import {DeepPartial, IKitThemeGeneral} from '@theme/types';
import {merge} from 'lodash';

export const overrideGeneralTokens = (
    kitGeneralTokens: IKitThemeGeneral,
    customGeneralTokens?: DeepPartial<IKitThemeGeneral>
): IKitThemeGeneral => {
    const mergedGeneralTokens = merge(kitGeneralTokens, customGeneralTokens);

    return mergedGeneralTokens;
};
