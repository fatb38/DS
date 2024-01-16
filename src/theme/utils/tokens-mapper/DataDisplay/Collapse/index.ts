import {kitCollapseCssTokens} from '@theme/aristid/components/DataDisplay/Collapse';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';

export const collapseKitTokenToAntdToken = {
    colorFillAlter: `var(${kitCollapseCssTokens.colors.background.default}, var(${kitColorsPaletteCssTokens.neutral.white}))`,
    colorBorder: `var(${kitCollapseCssTokens.colors.border.default}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200}))`
};
