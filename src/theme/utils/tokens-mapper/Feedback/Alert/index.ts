import {kitAlertCssTokens} from '@theme/aristid/components/Feedback/Alert';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {utilitiesCssTokens} from '@theme/aristid/general/utilities';

export const alertKitTokenToAntdToken = {
    colorSuccessBg: `var(${kitAlertCssTokens.colors.background.success}, var(${utilitiesCssTokens.success.successLight}))`,
    colorSuccessBorder: `var(${kitAlertCssTokens.colors.border.success}, var(${utilitiesCssTokens.success.successColor}))`,
    colorInfoBg: `var(${kitAlertCssTokens.colors.background.info}, var(${utilitiesCssTokens.main.mainLight}))`,
    colorInfoBorder: `var(${kitAlertCssTokens.colors.border.info}, var(${utilitiesCssTokens.main.mainColor}))`,
    colorWarningBg: `var(${kitAlertCssTokens.colors.background.warning}, var(${utilitiesCssTokens.warning.warningLight}))`,
    colorWarningBorder: `var(${kitAlertCssTokens.colors.border.warning}, var(${utilitiesCssTokens.warning.warningColor}))`,
    colorErrorBg: `var(${kitAlertCssTokens.colors.background.error}, var(${utilitiesCssTokens.error.errorLight}))`,
    colorErrorBorder: `var(${kitAlertCssTokens.colors.border.error}, var(${utilitiesCssTokens.error.errorColor}))`,
    colorText: `var(${kitAlertCssTokens.colors.typography.default}, var(${utilitiesCssTokens.text.textPrimary}))`,
    fontFamily: `var(${kitAlertCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`
};
