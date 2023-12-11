import {kitAlertCssTokens} from '@theme/aristid/components/Feedback/Alert';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';

export const alertKitTokenToAntdToken = {
    colorSuccessBg: `var(${kitAlertCssTokens.colors.background.success}, var(${kitColorsPaletteCssTokens.secondary.green.green100}))`,
    colorSuccessBorder: `var(${kitAlertCssTokens.colors.border.success}, var(${kitColorsPaletteCssTokens.secondary.green.green300}))`,
    colorInfoBg: `var(${kitAlertCssTokens.colors.background.info}, var(${kitColorsPaletteCssTokens.secondary.blue.blue100}))`,
    colorInfoBorder: `var(${kitAlertCssTokens.colors.border.info}, var(${kitColorsPaletteCssTokens.secondary.blue.blue300}))`,
    colorWarningBg: `var(${kitAlertCssTokens.colors.background.warning}, var(${kitColorsPaletteCssTokens.secondary.yellow.yellow100}))`,
    colorWarningBorder: `var(${kitAlertCssTokens.colors.border.warning}, var(${kitColorsPaletteCssTokens.secondary.yellow.yellow300}))`,
    colorErrorBg: `var(${kitAlertCssTokens.colors.background.error}, var(${kitColorsPaletteCssTokens.secondary.red.red100}))`,
    colorErrorBorder: `var(${kitAlertCssTokens.colors.border.error}, var(${kitColorsPaletteCssTokens.secondary.red.red400}))`,
    colorText: `var(${kitAlertCssTokens.colors.typography.default}, var(${kitColorsPaletteCssTokens.neutral.typography.black}))`,
    fontFamily: `var(${kitAlertCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`
};
