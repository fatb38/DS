import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitTagTheme} from '@theme/types/components/DataEntry/Tag';

const {colors, typography, border} = KitAristidThemeGeneral;

export const KitTagTheme: IKitTagTheme = {
    colors: {
        default: {
            background: {
                default: colors.primary.blue100
            },
            typography: {
                default: colors.neutral.typography.black
            }
        },
        red: {
            background: {
                default: colors.secondary.red.red400
            },
            typography: {
                default: colors.neutral.typography.white,
                hover: colors.secondary.red.red200,
                closeIcon: colors.neutral.typography.white
            }
        },
        green: {
            background: {
                default: colors.secondary.green.green400
            },
            typography: {
                default: colors.neutral.typography.white,
                hover: colors.secondary.green.green200,
                closeIcon: colors.neutral.typography.white
            }
        },
        blue: {
            background: {
                default: colors.secondary.blue.blue400
            },
            typography: {
                default: colors.neutral.typography.white,
                hover: colors.secondary.blue.blue200,
                closeIcon: colors.neutral.typography.white
            }
        },
        blueInvert: {
            background: {
                default: colors.secondary.blue.blue100
            },
            typography: {
                default: colors.secondary.blue.blue400,
                hover: colors.secondary.blue.blue300,
                closeIcon: colors.secondary.blue.blue400
            }
        }
    },
    typography: {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize7,
        fontWeight: typography.regularFontWeight
    },
    border: {
        radius: border.radius.s
    }
};
