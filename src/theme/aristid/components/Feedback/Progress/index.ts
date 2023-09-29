import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {AntdThemeConfigWithRequiredComponents} from '@theme/types';
import {KitProgressThemeAntd, KitProgressThemeStyled} from '@theme/types/components/Feedback/Progress';

const {colors, typography} = KitAristidThemeGeneral;

const kitProgressThemeAntd: KitProgressThemeAntd = {
    colors: {
        background: colors.neutral.background,
        progress: {
            info: colors.primary.blue400,
            success: colors.secondary.green.green400,
            error: colors.secondary.red.red400
        }
    },
    typography: {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize7
    }
};

const kitProgressThemeStyled: KitProgressThemeStyled = {
    circle: {
        typography: {
            fontWeight: typography.boldFontWeight,
            fontSize: typography.fontSize2
        }
    }
};

const formatKitTokenForAntdDesignTolen = (
    kitProgressThemeAntd: KitProgressThemeAntd
): AntdThemeConfigWithRequiredComponents['Progress'] => {
    const {colors, typography} = kitProgressThemeAntd;

    return {
        colorBgContainer: colors.background,
        colorInfo: colors.progress.info,
        colorSuccess: colors.progress.success,
        colorError: colors.progress.error,
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize
    };
};

export const KitProgressTheme = {
    ...formatKitTokenForAntdDesignTolen(kitProgressThemeAntd),
    ...kitProgressThemeStyled
};
