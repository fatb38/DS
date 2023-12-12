import {kitCollapseCssTokens} from '@theme/aristid/components/DataDisplay/Collapse';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {IKitCollapseTheme} from '@theme/types/components/DataDisplay/Collapse';

export const collapseKitTokenToAntdToken = (kitCollapseTheme: IKitCollapseTheme) => ({
    colorFillAlter: `var(${kitCollapseCssTokens.colors.background.default}, var(${kitColorsPaletteCssTokens.neutral.background}))`,
    colorBorder: `var(${kitCollapseCssTokens.colors.border.default}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey300}))`,
    borderRadius: kitCollapseTheme.border.radius
});
