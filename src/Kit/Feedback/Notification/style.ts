import {createGlobalStyle} from 'styled-components';
import {KitNotificatiobTheme} from '@theme/types/components/Feedback/Notification';

export const NotificationStyle = createGlobalStyle<{
    $theme: KitNotificatiobTheme;
}>`
    .ant-notification-notice-info .ant-notification-notice-content .ant-notification-notice-message {
        color: ${({$theme}) => $theme.colors.typography.message.info};
    }

    .ant-notification-notice-success .ant-notification-notice-content .ant-notification-notice-message {
        color: ${({$theme}) => $theme.colors.typography.message.success};
    }

    .ant-notification-notice-error .ant-notification-notice-content .ant-notification-notice-message {
        color: ${({$theme}) => $theme.colors.typography.message.error};
    }

    .ant-notification-notice-warning .ant-notification-notice-content .ant-notification-notice-message {
        color: ${({$theme}) => $theme.colors.typography.message.warning};
    }

    .ant-notification {
        .ant-notification-notice-content .ant-notification-notice-with-icon .ant-notification-notice-icon {
            font-size: 16px;
            margin-top: 10px;
        }

        .ant-notification-notice {
            font-family: ${({$theme}) => $theme.typography.fontFamily};
            padding: 16px;
            font-size: 10px;
            .ant-notification-notice-with-icon {
                .ant-notification-notice-message {
                    font-size: ${({$theme}) => $theme.typography.fontSize.message}px;
                    font-weight: ${({$theme}) => $theme.typography.fontWeight.message};
                    margin-inline-start: 48px;
                    padding-right: 32px;
                }
                .ant-notification-notice-description {
                    margin-inline-start: 48px;
                    font-size: ${({$theme}) => $theme.typography.fontSize.content}px;
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
