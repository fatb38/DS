import {kitCollapseCssTokens} from '@theme/aristid/components/DataDisplay/Collapse';
import {utilitiesCssTokens} from '@theme/aristid/general/utilities';

export const collapseKitTokenToAntdToken = {
    colorFillAlter: `var(${kitCollapseCssTokens.colors.background.default}, var(${utilitiesCssTokens.light}))`
};
