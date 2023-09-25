import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {AntdThemeConfigWithRequiredComponents} from '@theme/types';
import {KitTreeThemeAntd, KitTreeThemeStyled} from '@theme/types/components/DataDisplay/Tree';

const {colors, typography} = KitAristidThemeGeneral;

const kitTreeThemeAntd: KitTreeThemeAntd = {
    colors: {
        background: {
            hover: colors.primary.blue100
        }
    },
    typography: {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize5
    },
    icon: {
        fontSize: typography.fontSize5
    }
};

const kitTreeThemeStyled: KitTreeThemeStyled = {
    checkbox: {
        colors: {
            background: {
                default: colors.neutral.typography.white,
                disabled: colors.neutral.typography.white,
                checked: {
                    default: colors.primary.blue400,
                    hover: colors.primary.blue500
                }
            },
            border: {
                default: colors.neutral.typography.black60,
                disabled: colors.neutral.typography.black60,
                hover: colors.primary.blue400,
                checked: {
                    default: colors.primary.blue400,
                    hover: colors.primary.blue500
                }
            },
            icon: {
                default: colors.neutral.typography.black60,
                disabled: colors.neutral.typography.black60,
                checked: colors.neutral.typography.white
            }
        }
    },
    treenode: {
        typography: {
            fontWeight: typography.regularFontWeight
        },
        colors: {
            typography: {
                hover: colors.primary.blue400,
                disabled: colors.neutral.typography.black60
            },
            background: {
                hover: colors.primary.blue100,
                selected: colors.primary.blue100,
                indent: colors.neutral.typography.white
            }
        }
    }
};

const formatKitTokenForAntdDesignTolen = (
    kitTreeThemeAntd: KitTreeThemeAntd
): AntdThemeConfigWithRequiredComponents['Tree'] => {
    const {colors, typography, icon} = kitTreeThemeAntd;

    return {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize,
        fontSizeIcon: icon.fontSize,
        controlItemBgHover: colors.background.hover
    };
};

export const KitTreeTheme = {
    ...formatKitTokenForAntdDesignTolen(kitTreeThemeAntd),
    ...kitTreeThemeStyled
};
