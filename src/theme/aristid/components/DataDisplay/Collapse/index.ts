import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {AntdThemeConfigWithRequiredComponents} from '@theme/types';
import {KitCollapseThemeAntd, KitCollapseThemeStyled} from '@theme/types/components/DataDisplay/Collapse';

const {colors, border} = KitAristidThemeGeneral;

const kitCollapseThemeAntd: KitCollapseThemeAntd = {
    colors: {
        background: {
            default: colors.neutral.background
        },
        border: {
            default: colors.secondary.mediumGrey.mediumGrey300
        }
    },
    border: {
        radius: border.radius.s
    }
};

const kitCollapseThemeStyled: KitCollapseThemeStyled = {
    colors: {
        background: {
            active: colors.primary.blue100
        },
        border: {
            active: colors.primary.blue400
        }
    },
    border: {
        radius: border.radius.s
    }
};

const formatKitTokenForAntdDesignTolen = (
    kitCollapseThemeAntd: KitCollapseThemeAntd
): AntdThemeConfigWithRequiredComponents['Collapse'] => {
    const {colors, border} = kitCollapseThemeAntd;

    return {
        colorFillAlter: colors.background.default,
        colorBorder: colors.border.default,
        borderRadius: border.radius
    };
};

export const KitCollapseTheme = {
    ...formatKitTokenForAntdDesignTolen(kitCollapseThemeAntd),
    ...kitCollapseThemeStyled
};
