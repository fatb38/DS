import {IKitThemeGeneral} from '@theme/types';
import {IKitBreadcrumbTheme} from '@theme/types/components/Navigation/Breadcrumb';

export const getKitBreadcrumbTokens = (generalTokens: IKitThemeGeneral): IKitBreadcrumbTheme => {
    const {typography} = generalTokens;

    return {
        link: {
            typography: {
                fontFamily: typography.fontFamily,
                fontWeight: typography.regularFontWeight
            }
        }
    };
};
