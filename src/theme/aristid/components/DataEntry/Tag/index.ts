import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {AntdThemeConfigWithRequiredComponents} from '@theme/types';
import {KitTagThemeAntd, KitTagThemeStyled} from '@theme/types/components/DataEntry/Tag';

const {colors, typography, border} = KitAristidThemeGeneral;

const kitTagThemeAntd: KitTagThemeAntd = {
    colors: {
        background: {
            default: colors.primary.blue100
        },
        typography: {
            default: colors.neutral.typography.black
        }
    },
    border: {
        radius: border.radius.s
    }
};

const kitTagThemeStyled: KitTagThemeStyled = {
    colors: {
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
    }
};

const formatKitTokenForAntdDesignTolen = (
    kitTagThemeAntd: KitTagThemeAntd
): AntdThemeConfigWithRequiredComponents['Tag'] => {
    const {colors, border} = kitTagThemeAntd;

    return {
        defaultBg: colors.background.default,
        defaultColor: colors.typography.default,
        borderRadiusSM: border.radius
    };
};

export const KitTagTheme = {
    ...formatKitTokenForAntdDesignTolen(kitTagThemeAntd),
    ...kitTagThemeStyled
};
