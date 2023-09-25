import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {AntdThemeConfigWithRequiredComponents} from '@theme/types';
import {
    KitSelectDropDownThemeStyled,
    KitSelectThemeAntd,
    KitSelectThemeStyled
} from '@theme/types/components/DataEntry/Select';

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

const kitSelectThemeStyled: KitSelectThemeStyled = {
    colorBadge: {
        height: 16,
        width: 16,
        border: {
            radius: border.radius.xxs
        }
    }
};

const kitDropDownThemeStyled: KitSelectDropDownThemeStyled = {
    colors: {
        typography: {
            default: colors.secondary.mediumGrey.mediumGrey500,
            selected: colors.secondary.mediumGrey.mediumGrey500,
            active: colors.primary.blue400,
            group: colors.neutral.typography.black
        },
        background: {
            default: colors.secondary.mediumGrey.mediumGrey100,
            selected: colors.primary.blue100,
            active: colors.primary.blue100
        }
    },
    typography: {
        fontFamily: typography.fontFamily,
        fontWeight: {
            default: typography.mediumfontWeight,
            selected: typography.mediumfontWeight,
            active: typography.mediumfontWeight,
            group: typography.boldFontWeight
        }
    },
    border: {
        radius: border.radius.s
    }
};

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
    Select: {...kitSelectThemeStyled},
    DropDown: {...kitDropDownThemeStyled}
};
