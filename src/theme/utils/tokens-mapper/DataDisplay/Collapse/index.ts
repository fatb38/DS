import {kitCollapseCssTokens} from '@theme/aristid/components/DataDisplay/Collapse';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {spacingCssTokens} from '@theme/aristid/general/spacing';

export const collapseKitTokenToAntdToken = {
    colorFillAlter: `var(${kitCollapseCssTokens.colors.background.default}, var(${kitColorsPaletteCssTokens.neutral.background}))`,
    colorBorder: `var(${kitCollapseCssTokens.colors.border.default}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey300}))`,
    borderRadius:
        `calc(var(${kitCollapseCssTokens.border.radius}, var(${spacingCssTokens.s})) * 1px)` as unknown as number
};
