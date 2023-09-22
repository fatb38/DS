import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {AntdThemeConfigWithRequiredComponents} from '@theme/types';
import {KitSelectThemeAntd, KitSelectThemeStyled} from '@theme/types/components/DataEntry/Select';

const {colors, typography, border} = KitAristidThemeGeneral;

const kitSelectThemeAntd: KitSelectThemeAntd = {
    border: {
        radius: border.radius.s
    },
    height: 40,
    colors: {
        background: colors.neutral.typography.white
    },
    typography: {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize6
    }
};

const kitSelectThemeStyled: KitSelectThemeStyled = {};

const formatKitTokenForAntdDesignTolen = (
    kitSelectThemeAntd: KitSelectThemeAntd
): AntdThemeConfigWithRequiredComponents['Select'] => {
    const {colors, border, height, typography} = kitSelectThemeAntd;

    return {
        borderRadius: border.radius,
        controlHeight: height,
        colorBgContainer: colors.background,
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize
    };
};

export const KitSelectTheme = {
    ...formatKitTokenForAntdDesignTolen(kitSelectThemeAntd),
    ...kitSelectThemeStyled
};
