import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {KitHeaderThemeStyled} from '@theme/types/components/Navigation/Header';

const {colors} = KitAristidThemeGeneral;

const kitHeaderThemeStyled: KitHeaderThemeStyled = {
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

export const KitHeaderTheme = {
    ...kitHeaderThemeStyled
};
