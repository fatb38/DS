import {kitAlertCssTokens} from '@theme/aristid/components/Feedback/Alert';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {utilitiesCssTokens} from '@theme/aristid/general/utilities';

export const alertKitTokenToAntdToken = {
    colorSuccessBg: `var(${kitAlertCssTokens.colors.background.success}, var(${utilitiesCssTokens.success.light}))`,
    colorSuccessBorder: `var(${kitAlertCssTokens.colors.border.success}, var(${utilitiesCssTokens.success.default}))`,
    colorInfoBg: `var(${kitAlertCssTokens.colors.background.info}, var(${utilitiesCssTokens.main.light}))`,
    colorInfoBorder: `var(${kitAlertCssTokens.colors.border.info}, var(${utilitiesCssTokens.main.default}))`,
    colorWarningBg: `var(${kitAlertCssTokens.colors.background.warning}, var(${utilitiesCssTokens.warning.light}))`,
    colorWarningBorder: `var(${kitAlertCssTokens.colors.border.warning}, var(${utilitiesCssTokens.warning.default}))`,
    colorErrorBg: `var(${kitAlertCssTokens.colors.background.error}, var(${utilitiesCssTokens.error.light}))`,
    colorErrorBorder: `var(${kitAlertCssTokens.colors.border.error}, var(${utilitiesCssTokens.error.default}))`,
    colorText: `var(${kitAlertCssTokens.colors.typography.default}, var(${utilitiesCssTokens.text.primary}))`,
    fontFamily: `var(${kitAlertCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`
};
