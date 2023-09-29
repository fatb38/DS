import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {KitTypographyThemeStyled} from '@theme/types/components/General/Typography';

const {colors, typography} = KitAristidThemeGeneral;

const KitTypographyThemeStyled: KitTypographyThemeStyled = {
    colors: {
        typography: {
            default: colors.neutral.typography.black
        }
    },
    typography: {
        fontWeight: typography.defaultFontWeight,
        lineHeight: typography.lineHeight1
    },
    Title: {
        level1: {
            typography: {
                fontSize: typography.fontSize1,
                lineHeight: typography.lineHeight1
            }
        },
        level2: {
            typography: {
                fontSize: typography.fontSize2,
                lineHeight: typography.lineHeight2
            }
        },
        level3: {
            typography: {
                fontSize: typography.fontSize3,
                lineHeight: typography.lineHeight3
            }
        },
        level4: {
            typography: {
                fontSize: typography.fontSize4,
                lineHeight: typography.lineHeight4
            }
        }
    }
};

export const KitTypographyTheme = {
    ...KitTypographyThemeStyled
};
