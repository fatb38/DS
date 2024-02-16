import {kitNotificationCssTokens} from '@theme/aristid/components/Feedback/Notification';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';

export const getErrorStyle = () => {
    return {
        color: `var(${kitNotificationCssTokens.colors.icon.error}, var(${kitColorsPaletteCssTokens.secondary.red.red400}))`,
        backgroundColor: `var(${kitNotificationCssTokens.colors.icon.background.error}, var(${kitColorsPaletteCssTokens.secondary.red.red100}))`
    };
};

export const getWarningStyle = () => {
    return {
        color: `var(${kitNotificationCssTokens.colors.icon.warning}, var(${kitColorsPaletteCssTokens.secondary.orange.orange400}))`,
        backgroundColor: `var(${kitNotificationCssTokens.colors.icon.background.warning}, var(${kitColorsPaletteCssTokens.secondary.orange.orange100}))`
    };
};

export const getSuccessStyle = () => {
    return {
        color: `var(${kitNotificationCssTokens.colors.icon.success}, var(${kitColorsPaletteCssTokens.secondary.green.green400}))`,
        backgroundColor: `var(${kitNotificationCssTokens.colors.icon.background.success}, var(${kitColorsPaletteCssTokens.secondary.green.green100}))`
    };
};

export const getInfoStyle = () => {
    return {
        color: `var(${kitNotificationCssTokens.colors.icon.info}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
        backgroundColor: `var(${kitNotificationCssTokens.colors.icon.background.info}, var(${kitColorsPaletteCssTokens.primary.primary100}))`
    };
};
