import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {KitSwitchThemeStyled} from '@theme/types/components/DataEntry/Switch';

const {colors} = KitAristidThemeGeneral;

const kitSwitchThemeStyled: KitSwitchThemeStyled = {
    colors: {
        background: {
            default: {
                on: colors.primary.blue400,
                off: colors.neutral.background
            },
            disabled: colors.secondary.mediumGrey.mediumGrey100
        },
        handle: {
            background: {
                default: {
                    on: colors.neutral.typography.white,
                    off: colors.secondary.mediumGrey.mediumGrey400
                },
                disabled: colors.secondary.mediumGrey.mediumGrey100
            },
            border: {
                default: {
                    on: colors.primary.blue400,
                    off: colors.secondary.mediumGrey.mediumGrey400
                },
                disabled: colors.secondary.mediumGrey.mediumGrey200
            }
        }
    }
};

export const KitSwitchTheme = {
    ...kitSwitchThemeStyled
};
