import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitRateTheme} from '@theme/types/components/DataEntry/Rate';

const {colors} = KitAristidThemeGeneral;

export const KitRateTheme: IKitRateTheme = {
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
