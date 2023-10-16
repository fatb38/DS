import {IKitThemeGeneral} from '@theme/types';
import {IKitBreadcrumbTheme} from '@theme/types/components/Navigation/Breadcrumb';

export const getKitBreadcrumbTokens = (generalTokens: IKitThemeGeneral): IKitBreadcrumbTheme => {
    const {colors, typography} = generalTokens;

    return {
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
};
