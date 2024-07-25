import {kitNotificationCssTokens} from '@theme/aristid/components/Feedback/Notification';
import {utilitiesCssTokens} from '@theme/aristid/general/utilities';

export const getErrorStyle = () => ({
    color: `var(${kitNotificationCssTokens.colors.icon.error}, var(${utilitiesCssTokens.error.errorColor}))`,
    backgroundColor: `var(${kitNotificationCssTokens.colors.icon.background.error}, var(${utilitiesCssTokens.error.errorLight}))`
});

export const getWarningStyle = () => ({
    color: `var(${kitNotificationCssTokens.colors.icon.warning}, var(${utilitiesCssTokens.warning.warningColor}))`,
    backgroundColor: `var(${kitNotificationCssTokens.colors.icon.background.warning}, var(${utilitiesCssTokens.warning.warningLight}))`
});

export const getSuccessStyle = () => ({
    color: `var(${kitNotificationCssTokens.colors.icon.success}, var(${utilitiesCssTokens.success.successColor}))`,
    backgroundColor: `var(${kitNotificationCssTokens.colors.icon.background.success}, var(${utilitiesCssTokens.success.successLight}))`
});

export const getInfoStyle = () => ({
    color: `var(${kitNotificationCssTokens.colors.icon.info}, var(${utilitiesCssTokens.main.mainColor}))`,
    backgroundColor: `var(${kitNotificationCssTokens.colors.icon.background.info}, var(${utilitiesCssTokens.main.mainLight}))`
});
