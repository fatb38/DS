import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {AntdThemeConfigWithRequiredComponents} from '@theme/types';
import {KitTooltipThemeAntd} from '@theme/types/components/DateDisplay/Tooltip';

const {colors, typography, border} = KitAristidThemeGeneral;

const kitTooltipThemeAntd: KitTooltipThemeAntd = {
    colors: {
        background: {
            default: colors.primary.blue600
        },
        typography: {
            default: colors.neutral.typography.white
        }
    },
    border: {
        radius: border.radius.s
    },
    typography: {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize7
    }
};

const formatKitTokenForAntdDesignTolen = (
    kitTooltipThemeAntd: KitTooltipThemeAntd
): AntdThemeConfigWithRequiredComponents['Tooltip'] => {
    const {colors, border, typography} = kitTooltipThemeAntd;

    return {
        colorBgSpotlight: colors.background.default,
        colorTextLightSolid: colors.typography.default,
        borderRadius: border.radius,
        fontSize: typography.fontSize,
        fontFamily: typography.fontFamily
    };
};

export const KitTooltipTheme = {
    ...formatKitTokenForAntdDesignTolen(kitTooltipThemeAntd)
};
