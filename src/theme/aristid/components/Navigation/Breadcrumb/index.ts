import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {KitBreadcrumbThemeStyled} from '@theme/types/components/Navigation/Breadcrumb';

const {colors, typography} = KitAristidThemeGeneral;

const kitBreadcrumbThemeStyled: KitBreadcrumbThemeStyled = {
    link: {
        colors: {
            typography: {
                default: colors.neutral.gray.gray500
            }
        },
        typography: {
            fontFamily: typography.fontFamily,
            fontWeight: typography.regularFontWeight
        }
    }
};

export const KitBreadcrumbTheme = {
    ...kitBreadcrumbThemeStyled
};
