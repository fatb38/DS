import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {AntdThemeConfigWithRequiredComponents} from '@theme/types';
import {KitAlertThemeAntd, KitAlertThemeStyled} from '@theme/types/components/Feedback/Alert';

const {colors, typography, border} = KitAristidThemeGeneral;

const kitAlertThemeAntd: KitAlertThemeAntd = {
    colors: {
        border: {
            success: colors.secondary.green.green300,
            info: colors.secondary.blue.blue300,
            warning: colors.secondary.yellow.yellow300,
            error: colors.secondary.red.red400
        },
        background: {
            success: colors.secondary.green.green100,
            info: colors.secondary.blue.blue100,
            warning: colors.secondary.yellow.yellow100,
            error: colors.secondary.red.red100
        },
        typography: {
            default: colors.neutral.typography.black
        }
    },
    typography: {
        fontFamily: typography.fontFamily
    }
};

const kitAlertThemeStyled: KitAlertThemeStyled = {
    border: {
        radius: border.radius.s
    },
    typography: {
        fontSize: {
            message: typography.fontSize5,
            description: typography.fontSize7
        }
    },
    icon: {
        alert: {
            size: typography.fontSize4
        },
        close: {
            size: 10
        }
    },
    colors: {
        icon: {
            alert: {
                success: colors.secondary.green.green400,
                info: colors.primary.blue400,
                warning: colors.secondary.yellow.yellow400,
                error: colors.secondary.red.red400
            }
        }
    }
};

const formatKitTokenForAntdDesignTolen = (
    kitAlertThemeAntd: KitAlertThemeAntd
): AntdThemeConfigWithRequiredComponents['Alert'] => {
    const {colors, typography} = kitAlertThemeAntd;

    return {
        colorSuccessBg: colors.background.success,
        colorSuccessBorder: colors.border.success,
        colorInfoBg: colors.background.info,
        colorInfoBorder: colors.border.info,
        colorWarningBg: colors.background.warning,
        colorWarningBorder: colors.border.warning,
        colorErrorBg: colors.background.error,
        colorErrorBorder: colors.border.error,
        colorText: colors.typography.default,
        fontFamily: typography.fontFamily
    };
};

export const KitAlertTheme = {
    ...formatKitTokenForAntdDesignTolen(kitAlertThemeAntd),
    ...kitAlertThemeStyled
};
