import {createGlobalStyle} from 'styled-components';
import {colorsPalette} from '../../../theme/colors';
import {typographyHeaders, Typography} from '../../../theme/typography';

export const NotificationStyle = createGlobalStyle`
    .ant-notification-notice-info .ant-notification-notice-content .ant-notification-notice-message {
        color: ${colorsPalette.primary.blue400};
    }

    .ant-notification-notice-success .ant-notification-notice-content .ant-notification-notice-message {
        color: ${colorsPalette.secondary.green.green400};
    }

    .ant-notification-notice-error .ant-notification-notice-content .ant-notification-notice-message {
        color: ${colorsPalette.secondary.red.red400};
    }

    .ant-notification-notice-warning .ant-notification-notice-content .ant-notification-notice-message {
        color: ${colorsPalette.secondary.orange.orange400};
    }

    .ant-notification {
        .ant-notification-notice-content .ant-notification-notice-with-icon .ant-notification-notice-icon {
            font-size: 16px;
            margin-top: 10px;
        }

        .ant-notification-notice {
            padding: 16px;
            font-size: 10px;
            .ant-notification-notice-with-icon {
                .ant-notification-notice-message {
                    font-size: ${typographyHeaders.fontSize4}px;
                    font-weight: ${Typography.mediumfontWeight};
                    margin-inline-start: 48px;
                    padding-right: 32px;
                }
                .ant-notification-notice-description {
                    margin-inline-start: 48px;
                    font-size: ${Typography.fontSize5}px;
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
