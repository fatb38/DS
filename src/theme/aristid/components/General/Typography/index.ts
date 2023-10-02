import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitTypographyTheme} from '@theme/types/components/General/Typography';

const {colors, typography} = KitAristidThemeGeneral;

export const KitTypographyTheme: IKitTypographyTheme = {
    colors: {
        typography: {
            default: colors.neutral.typography.black
        }
    },
    typography: {
        fontFamily: typography.fontFamily,
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
    },
    Text: {
        fontWeight: {
            regular: typography.regularFontWeight,
            medium: typography.mediumfontWeight,
            bold: typography.boldFontWeight
        }
    },
    Paragraph: {
        fontWeight: {
            regular: typography.regularFontWeight,
            medium: typography.mediumfontWeight,
            bold: typography.boldFontWeight
        }
    },
    Link: {
        colors: {
            typography: {
                default: colors.primary.blue400,
                hover: colors.primary.blue300
            }
        },
        fontWeight: {
            regular: typography.regularFontWeight,
            medium: typography.mediumfontWeight,
            bold: typography.boldFontWeight
        }
    }
};
