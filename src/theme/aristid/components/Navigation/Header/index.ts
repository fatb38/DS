import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitHeaderTheme} from '@theme/types/components/Navigation/Header';

const {colors} = KitAristidThemeGeneral;

export const KitHeaderTheme: IKitHeaderTheme = {
    colors: {
        background: {
            default: colors.neutral.typography.white
        },
        typography: {
            input: {
                default: colors.secondary.mediumGrey.mediumGrey500
            }
        }
    }
};
