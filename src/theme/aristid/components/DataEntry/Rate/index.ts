import {IKitThemeGeneral} from '@theme/types';
import {IKitRateTheme} from '@theme/types/components/DataEntry/Rate';

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
