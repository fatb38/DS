import React from 'react';
import {Alert as AntdAlert} from 'antd';
import {KitAlertProps} from './types';
import {styled} from 'styled-components';
import theme from '@theme/index';

const StyledAntdAlert = styled(AntdAlert)`
    &.ant-alert-with-description {
        padding-inline: 0px;
        padding-block: 0px;
        padding: 8px 16px;

        .ant-alert-message {
            margin-bottom: 6px;
        }

        .anticon.ant-alert-icon {
            margin-top: 3px;
        }
    }

    &:not(.ant-alert-banner) {
        border-radius: 7px;
    }

    padding: 8px 16px;

    .ant-alert-message {
        font-size: ${theme.typography.fontSize5};
    }

    .ant-alert-description {
        font-size: ${theme.typography.fontSize7};
    }

    .anticon.ant-alert-icon {
        font-size: 16px;
        margin-inline-end: 8px;
    }

    .anticon.anticon-close {
        font-size: 10px;
    }

    &.ant-alert-success {
        .anticon.ant-alert-icon {
            color: ${theme.color.secondary.green.green400};
        }
    }

    &.ant-alert-info {
        .anticon.ant-alert-icon {
            color: ${theme.color.primary.blue400};
        }
    }

    &.ant-alert-warning {
        .anticon.ant-alert-icon {
            color: ${theme.color.secondary.yellow.yellow400};
        }
    }

    &.ant-alert-error {
        .anticon.ant-alert-icon {
            color: ${theme.color.secondary.red.red400};
        }
    }
`;

export const KitAlert: React.FunctionComponent<KitAlertProps> = alertProps => {
    return <StyledAntdAlert {...alertProps} />;
};

KitAlert.displayName = 'KitAlert';
