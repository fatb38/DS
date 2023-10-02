import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitBreadcrumbTheme} from '@theme/types/components/Navigation/Breadcrumb';

const {colors, typography} = KitAristidThemeGeneral;

export const KitBreadcrumbTheme: IKitBreadcrumbTheme = {
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
