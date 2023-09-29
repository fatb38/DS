import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {KitMenuThemeStyled} from '@theme/types/components/Navigation/Menu';

const {colors} = KitAristidThemeGeneral;

const kitMenuThemeStyled: KitMenuThemeStyled = {
    menu: {
        colors: {
            background: {
                default: colors.neutral.typography.white
            }
        }
    },
    itemMenu: {
        colors: {
            background: {
                default: colors.neutral.typography.white,
                active: colors.primary.blue100,
                hover: colors.primary.blue100,
                danger: colors.secondary.red.red100
            },
            border: {
                active: colors.primary.blue400
            },
            value: {
                default: colors.secondary.mediumGrey.mediumGrey300
            },
            rafter: {
                default: colors.secondary.mediumGrey.mediumGrey300,
                hover: colors.primary.blue400
            },
            title: {
                default: colors.primary.blue400,
                danger: colors.secondary.red.red400
            },
            icon: {
                default: colors.secondary.mediumGrey.mediumGrey300,
                danger: colors.secondary.red.red400
            }
        }
    }
};

export const KitMenuTheme = {
    ...kitMenuThemeStyled
};
