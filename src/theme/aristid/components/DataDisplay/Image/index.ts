import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitImageTheme} from '@theme/types/components/DataDisplay/Image';

const {colors, border} = KitAristidThemeGeneral;

export const KitImageTheme: IKitImageTheme = {
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
