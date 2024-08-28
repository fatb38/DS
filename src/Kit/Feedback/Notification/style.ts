import {kitNotificationCssTokens} from '@theme/aristid/components/Feedback/Notification';
import {utilitiesCssTokens} from '@theme/aristid/general/utilities';

export const getErrorStyle = () => ({
    color: `var(${kitNotificationCssTokens.colors.icon.error}, var(${utilitiesCssTokens.error.default}))`,
    backgroundColor: `var(${kitNotificationCssTokens.colors.icon.background.error}, var(${utilitiesCssTokens.error.light}))`
});

export const getWarningStyle = () => ({
    color: `var(${kitNotificationCssTokens.colors.icon.warning}, var(${utilitiesCssTokens.warning.default}))`,
    backgroundColor: `var(${kitNotificationCssTokens.colors.icon.background.warning}, var(${utilitiesCssTokens.warning.light}))`
});

export const getSuccessStyle = () => ({
    color: `var(${kitNotificationCssTokens.colors.icon.success}, var(${utilitiesCssTokens.success.default}))`,
    backgroundColor: `var(${kitNotificationCssTokens.colors.icon.background.success}, var(${utilitiesCssTokens.success.light}))`
});

export const getInfoStyle = () => ({
    color: `var(${kitNotificationCssTokens.colors.icon.info}, var(${utilitiesCssTokens.main.default}))`,
    backgroundColor: `var(${kitNotificationCssTokens.colors.icon.background.info}, var(${utilitiesCssTokens.main.light}))`
});
