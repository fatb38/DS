import {kitBadgeCssTokens} from '@theme/aristid/components/DataDisplay/Badge';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';

export const badgeKitTokenToAntdToken = {
    fontFamily: `var(${kitBadgeCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    colorError: `var(${kitBadgeCssTokens.colors.background.error}, var(${kitColorsPaletteCssTokens.secondary.red.red400}))`,
    colorSuccess: `var(${kitBadgeCssTokens.colors.background.success}, var(${kitColorsPaletteCssTokens.secondary.green.green400}))`,
    colorPrimary: `var(${kitBadgeCssTokens.colors.background.primary}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
    colorWarning: `var(${kitBadgeCssTokens.colors.background.warning}, var(${kitColorsPaletteCssTokens.secondary.yellow.yellow400}))`
};
