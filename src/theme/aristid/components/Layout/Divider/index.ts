import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {AntdThemeConfigWithRequiredComponents} from '@theme/types';
import {KitDividerThemeAntd, KitDividerThemeStyled} from '@theme/types/components/Layout/Divider';

const {colors, typography} = KitAristidThemeGeneral;

const kitDividerThemeAntd: KitDividerThemeAntd = {
    colors: {
        typography: {
            default: colors.neutral.typography.black
        },
        split: {
            default: colors.neutral.typography.black60
        }
    },
    typography: {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize6,
        lineHeight: typography.lineHeight6
    }
};

const kitDividerThemeStyled: KitDividerThemeStyled = {
    colors: {
        split: {
            lightGrey: colors.secondary.mediumGrey.mediumGrey100
        }
    },
    typography: {
        fontWeight: typography.mediumfontWeight
    }
};

const formatKitTokenForAntdDesignTolen = (
    kitDividerThemeAntd: KitDividerThemeAntd
): AntdThemeConfigWithRequiredComponents['Divider'] => {
    const {colors, typography} = kitDividerThemeAntd;

    return {
        colorText: colors.typography.default,
        colorTextHeading: colors.typography.default,
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize,
        fontSizeLG: typography.fontSize,
        lineHeight: typography.lineHeight,
        colorSplit: colors.split.default
    };
};

export const KitDividerTheme = {
    ...formatKitTokenForAntdDesignTolen(kitDividerThemeAntd),
    ...kitDividerThemeStyled
};
