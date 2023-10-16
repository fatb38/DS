import {IKitThemeGeneral} from '@theme/types';
import {IKitRateTheme} from '@theme/types/components/DataEntry/Rate';

export const getKitRateTokens = (generalTokens: IKitThemeGeneral): IKitRateTheme => {
    const {colors} = generalTokens;

    return {
        colors: {
            star: {
                default: colors.secondary.mediumGrey.mediumGrey100,
                disabled: colors.secondary.mediumGrey.mediumGrey100,
                active: {
                    default: colors.secondary.yellow.yellow300,
                    red: colors.secondary.red.red300,
                    green: colors.secondary.green.green300,
                    blue: colors.secondary.blue.blue300
                }
            }
        }
    };
};
