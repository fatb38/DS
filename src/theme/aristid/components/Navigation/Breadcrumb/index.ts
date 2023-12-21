import {IKitBreadcrumbCssTokens} from '@theme/types/components/Navigation/Breadcrumb';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitBreadcrumbCssTokens = generateCssTokens<IKitBreadcrumbCssTokens>('--components-Breadcrumb', {
    link: {
        typography: {
            fontFamily: '',
            fontWeight: ''
        }
    }
});
