import {IKitThemeGeneral} from '@theme/types';
import {IKitBreadcrumbCssTokens, IKitBreadcrumbTheme} from '@theme/types/components/Navigation/Breadcrumb';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

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

export const kitBreadcrumbCssTokens = generateCssTokens<IKitBreadcrumbCssTokens>('--components-Breadcrumb', {
    link: {
        typography: {
            fontFamily: '',
            fontWeight: ''
        }
    }
});
