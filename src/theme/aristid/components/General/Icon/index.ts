import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {KitIconThemeStyled} from '@theme/types/components/General/Icon';

const {colors, border} = KitAristidThemeGeneral;

const kitIconThemeStyled: KitIconThemeStyled = {
    colors: {
        icon: {
            default: colors.neutral.typography.black,
            on: colors.primary.blue400
        },
        background: {
            default: 'transparent',
            on: colors.primary.blue100
        }
    },
    border: {
        radius: {
            default: border.radius.square,
            on: border.radius.s
        }
    }
};

export const KitIconTheme = {
    ...kitIconThemeStyled
};
