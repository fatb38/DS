import {createGlobalStyle} from 'styled-components';
import {kitNotificationCssTokens} from '@theme/aristid/components/Feedback/Notification';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {spacingCssTokens} from '@theme/aristid/general/spacing';
import {borderCssTokens} from '@theme/aristid/general/border';

export const NotificationStyle = createGlobalStyle`
    .ant-notification .ant-notification-notice.ant-notification-notice-info {
        border-color: var(${kitNotificationCssTokens.colors.typography.message.info}, var(${kitColorsPaletteCssTokens.primary.primary400}));
        .ant-notification-notice-content .ant-notification-notice-message {
            color: var(${kitNotificationCssTokens.colors.typography.message.info}, var(${kitColorsPaletteCssTokens.primary.primary400}));
        }
    }
        
    .ant-notification .ant-notification-notice.ant-notification-notice-success {
        border-color: var(${kitNotificationCssTokens.colors.typography.message.success}, var(${kitColorsPaletteCssTokens.secondary.green.green400}));
        .ant-notification-notice-content .ant-notification-notice-message {
            color: var(${kitNotificationCssTokens.colors.typography.message.success}, var(${kitColorsPaletteCssTokens.secondary.green.green400}));
        }
    }

    .ant-notification .ant-notification-notice.ant-notification-notice-error {
        border-color: var(${kitNotificationCssTokens.colors.typography.message.error}, var(${kitColorsPaletteCssTokens.secondary.red.red400}));
        .ant-notification-notice-content .ant-notification-notice-message {
            color: var(${kitNotificationCssTokens.colors.typography.message.error}, var(${kitColorsPaletteCssTokens.secondary.red.red400}));
        }
    }

    .ant-notification .ant-notification-notice.ant-notification-notice-warning {
        border-color: var(${kitNotificationCssTokens.colors.typography.message.warning}, var(${kitColorsPaletteCssTokens.secondary.orange.orange400}));
        .ant-notification-notice-content .ant-notification-notice-message {
            color: var(${kitNotificationCssTokens.colors.typography.message.warning}, var(${kitColorsPaletteCssTokens.secondary.orange.orange400}));
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
            border-left: calc(var(${spacingCssTokens.xs}) * 1px) transparent solid;
            border-radius: calc(var(${borderCssTokens.radius.s}) * 1px);
            .ant-notification-notice-with-icon {
                .ant-notification-notice-message {
                    font-size: calc(var(${kitNotificationCssTokens.typography.fontSize.message}, var(${typographyCssTokens.fontSize4})) * 1px);
                    font-weight: var(${kitNotificationCssTokens.typography.fontWeight.message}, var(${typographyCssTokens.mediumfontWeight}));
                    margin-inline-start: 48px;
                    padding-right: 32px;
                }
                .ant-notification-notice-description {
                    margin-inline-start: 48px;
                    font-size: calc(var(${kitNotificationCssTokens.typography.fontSize.content}, var(${typographyCssTokens.fontSize5}))* 1px);
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
