import {createGlobalStyle} from 'styled-components';
import {kitNotificationCssTokens} from '@theme/aristid/components/Feedback/Notification';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {spacingCssTokens} from '@theme/aristid/general/spacing';
import {borderCssTokens} from '@theme/aristid/general/border';
import {convertToPixel} from '@theme/utils/convert';

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

export const NotificationStyle = createGlobalStyle`
    .ant-notification .ant-notification-notice.ant-notification-notice-info {
        border-color: var(${kitNotificationCssTokens.colors.typography.message.info}, var(${
            kitColorsPaletteCssTokens.primary.primary400
        }));
        .ant-notification-notice-content .ant-notification-notice-message {
            color: var(${kitNotificationCssTokens.colors.typography.message.info}, var(${
                kitColorsPaletteCssTokens.primary.primary400
            }));
        }
    }

    .ant-notification .ant-notification-notice.ant-notification-notice-success {
        border-color: var(${kitNotificationCssTokens.colors.typography.message.success}, var(${
            kitColorsPaletteCssTokens.secondary.green.green400
        }));
        .ant-notification-notice-content .ant-notification-notice-message {
            color: var(${kitNotificationCssTokens.colors.typography.message.success}, var(${
                kitColorsPaletteCssTokens.secondary.green.green400
            }));
        }
    }

    .ant-notification .ant-notification-notice.ant-notification-notice-error {
        border-color: var(${kitNotificationCssTokens.colors.typography.message.error}, var(${
            kitColorsPaletteCssTokens.secondary.red.red400
        }));
        .ant-notification-notice-content .ant-notification-notice-message {
            color: var(${kitNotificationCssTokens.colors.typography.message.error}, var(${
                kitColorsPaletteCssTokens.secondary.red.red400
            }));
        }
    }

    .ant-notification .ant-notification-notice.ant-notification-notice-warning {
        border-color: var(${kitNotificationCssTokens.colors.typography.message.warning}, var(${
            kitColorsPaletteCssTokens.secondary.orange.orange400
        }));
        .ant-notification-notice-content .ant-notification-notice-message {
            color: var(${kitNotificationCssTokens.colors.typography.message.warning}, var(${
                kitColorsPaletteCssTokens.secondary.orange.orange400
            }));
        }
    }

    .ant-notification {
        .ant-notification-notice-content .ant-notification-notice-with-icon .ant-notification-notice-icon {
            font-size: 16px;
        }

        .ant-notification-notice {
            font-family: var(${kitNotificationCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}));
            padding: 16px;
            font-size: 10px;
            border-left: ${convertToPixel(spacingCssTokens.xs)} transparent solid;
            border-radius: ${convertToPixel(borderCssTokens.radius.s)};
            .ant-notification-notice-with-icon {
                .ant-notification-notice-message {
                    font-size: ${convertToPixel(
                        kitNotificationCssTokens.typography.fontSize.message,
                        typographyCssTokens.fontSize4
                    )};
                    font-weight: var(${kitNotificationCssTokens.typography.fontWeight.message}, var(${
                        typographyCssTokens.mediumfontWeight
                    }));
                    margin-inline-start: 48px;
                    padding-right: 32px;
                }
                .ant-notification-notice-description {
                    margin-inline-start: 48px;
                    font-size: ${convertToPixel(
                        kitNotificationCssTokens.typography.fontSize.content,
                        typographyCssTokens.fontSize5
                    )};
                    line-height: 22px;
                    margin-bottom: 8px;
                }
            }

            .ant-notification-notice-close {
                top: 16px;
                inset-inline-end: 16px;
                font-size: 14px;
            }
        }
    }
`;
