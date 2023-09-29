import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {AntdThemeConfigWithRequiredComponents} from '@theme/types';
import {KitPaginationThemeAntd, KitPaginationThemeStyled} from '@theme/types/components/Navigation/Pagination';

const {colors, typography} = KitAristidThemeGeneral;

const kitPaginationThemeAntd: KitPaginationThemeAntd = {
    colors: {
        background: {
            container: {
                default: colors.neutral.typography.white,
                disabled: colors.neutral.background
            }
        }
    },
    typography: {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize5
    }
};

const kitPaginationThemeStyled: KitPaginationThemeStyled = {
    pagination: {
        colors: {
            background: {
                default: 'transparent',
                hover: colors.neutral.typography.white
            },
            typography: {
                disabledActive: colors.neutral.typography.white
            }
        },
        border: {
            default: colors.neutral.typography.black60,
            hover: colors.primary.blue400
        }
    },
    prevNext: {
        colors: {
            background: {
                default: 'transparent'
            },
            border: {
                default: 'transparent',
                hover: colors.primary.blue400
            },
            typography: {
                hover: colors.primary.blue400
            }
        },
        typography: {
            fontSize: typography.fontSize5
        }
    },
    selector: {
        colors: {
            background: {
                default: colors.neutral.typography.white
            },
            border: {
                default: colors.neutral.typography.black60
            }
        }
    },
    quickJumper: {
        colors: {
            border: {
                default: colors.neutral.typography.black60
            }
        }
    }
};

const formatKitTokenForAntdDesignTolen = (
    kitPaginationThemeAntd: KitPaginationThemeAntd
): AntdThemeConfigWithRequiredComponents['Pagination'] => {
    const {typography, colors} = kitPaginationThemeAntd;

    return {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize,
        fontSizeSM: KitAristidThemeGeneral.typography.fontSize5,
        colorBgContainer: colors.background.container.default,
        colorBgContainerDisabled: colors.background.container.disabled,
        fontWeightStrong: KitAristidThemeGeneral.typography.mediumfontWeight as number,
        controlHeight: 32,
        controlHeightSM: 24,
        colorPrimary: KitAristidThemeGeneral.colors.primary.blue400,
        colorPrimaryBorder: KitAristidThemeGeneral.colors.primary.blue400,
        colorPrimaryHover: KitAristidThemeGeneral.colors.primary.blue400,
        colorBgTextActive: KitAristidThemeGeneral.colors.neutral.typography.black60,
        colorTextDisabled: KitAristidThemeGeneral.colors.neutral.typography.black60
    };
};

export const KitPaginationTheme = {
    ...formatKitTokenForAntdDesignTolen(kitPaginationThemeAntd),
    ...kitPaginationThemeStyled
};
