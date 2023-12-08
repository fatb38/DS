import {IKitThemeGeneral} from '@theme/types';
import {IKitRateCssTokens, IKitRateTheme} from '@theme/types/components/DataEntry/Rate';
import {generateCssTokens} from '@theme/utils/css-tokens-generator.ts';

export const getKitRateTokens = (generalTokens: IKitThemeGeneral): IKitRateTheme => {
    const {colors} = generalTokens;

    return {
        colors: {
            star: {
                default: colors.secondary.yellow.yellow400,
                disabled: colors.secondary.mediumGrey.mediumGrey300
            }
        }
    };
};

export const kitRateCssTokens = generateCssTokens<IKitRateCssTokens>('--components-Rate', {
    colors: {star: {default: '', disabled: ''}}
});
