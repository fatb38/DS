import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitSliderTheme} from '@theme/types/components/DataEntry/Slider';

const {colors} = KitAristidThemeGeneral;

export const KitSliderTheme: IKitSliderTheme = {
    handle: {
        colors: {
            background: {
                hover: colors.primary.blue100,
                focus: colors.primary.blue400
            },
            border: {
                default: colors.primary.blue400,
                disabled: colors.secondary.mediumGrey.mediumGrey200
            }
        },
        size: 14,
        border: 2
    },
    rail: {
        colors: {
            background: {
                default: colors.secondary.mediumGrey.mediumGrey200,
                hover: colors.secondary.mediumGrey.mediumGrey200
            }
        },
        size: 4
    },
    dot: {
        colors: {
            border: {
                default: colors.secondary.mediumGrey.mediumGrey200,
                active: colors.primary.blue400
            }
        },
        size: 8
    },
    track: {
        colors: {
            background: {
                default: colors.primary.blue400,
                hover: colors.primary.blue400
            }
        }
    },
    startIcon: {
        colors: {
            default: colors.neutral.typography.black60
        }
    },
    endIcon: {
        colors: {
            default: colors.neutral.typography.black60
        }
    }
};
