import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitSwitchTheme} from '@theme/types/components/DataEntry/Switch';

const {colors} = KitAristidThemeGeneral;

export const KitSwitchTheme: IKitSwitchTheme = {
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
