import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {KitImageThemeStyled} from '@theme/types/components/DataDisplay/Image';

const {colors, border} = KitAristidThemeGeneral;

const kitImageThemeStyled: KitImageThemeStyled = {
    colors: {
        border: {
            none: 'none',
            default: colors.neutral.typography.black60
        }
    },
    border: {
        radius: {
            default: border.radius.square,
            rounded: border.radius.s
        }
    }
};

export const KitImageTheme = {
    ...kitImageThemeStyled
};
