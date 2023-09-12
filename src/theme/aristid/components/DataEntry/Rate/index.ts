import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {AntdThemeConfigWithRequiredComponents} from '@theme/types';
import {KitRateThemeAntd, KitRateThemeStyled} from '@theme/types/components/DataEntry/Rate';

const {colors} = KitAristidThemeGeneral;

const kitRateThemeAntd: KitRateThemeAntd = {
    colors: {
        star: {
            active: {
                default: colors.secondary.yellow.yellow300
            }
        }
    }
};

const kitRateThemeStyled: KitRateThemeStyled = {
    colors: {
        star: {
            default: colors.secondary.mediumGrey.mediumGrey100,
            disabled: colors.secondary.mediumGrey.mediumGrey100,
            active: {
                red: colors.secondary.red.red300,
                green: colors.secondary.green.green300,
                blue: colors.secondary.blue.blue300
            }
        }
    }
};

const formatKitTokenForAntdDesignTolen = (
    kitRateThemeAntd: KitRateThemeAntd
): AntdThemeConfigWithRequiredComponents['Rate'] => {
    const {colors} = kitRateThemeAntd;

    return {
        starColor: colors.star.active.default
    };
};

export const KitRateTheme = {
    ...formatKitTokenForAntdDesignTolen(kitRateThemeAntd),
    ...kitRateThemeStyled
};
