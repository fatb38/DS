import React from 'react';
import {Alert as AntdAlert} from 'antd';
import {KitAlertProps} from './types';
import {styled} from 'styled-components';
import {useKitTheme} from '@theme/theme-context';
import {IKitAlertTheme} from '@theme/types/components/Feedback/Alert';

const StyledAntdAlert = styled(AntdAlert)<{
    $theme: IKitAlertTheme;
}>`
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
        border-radius: ${({$theme}) => $theme.border.radius};
    }

    padding: 8px 16px;

    .ant-alert-message {
        font-size: ${({$theme}) => $theme.typography.fontSize.message}px;
    }

    .ant-alert-description {
        font-size: ${({$theme}) => $theme.typography.fontSize.description}px;
    }

    .anticon.ant-alert-icon {
        font-size: ${({$theme}) => $theme.icon.alert.size}px;
        margin-inline-end: 8px;
    }

    .anticon.anticon-close {
        font-size: ${({$theme}) => $theme.icon.close.size}px;
    }

    &.ant-alert-success {
        .anticon.ant-alert-icon {
            color: ${({$theme}) => $theme.colors.icon.alert.success};
        }
    }

    &.ant-alert-info {
        .anticon.ant-alert-icon {
            color: ${({$theme}) => $theme.colors.icon.alert.info};
        }
    }

    &.ant-alert-warning {
        .anticon.ant-alert-icon {
            color: ${({$theme}) => $theme.colors.icon.alert.warning};
        }
    }

    &.ant-alert-error {
        .anticon.ant-alert-icon {
            color: ${({$theme}) => $theme.colors.icon.alert.error};
        }
    }
`;

export const KitAlert: React.FunctionComponent<KitAlertProps> = alertProps => {
    const {theme} = useKitTheme();

    return <StyledAntdAlert $theme={theme.components.Alert} {...alertProps} />;
};

KitAlert.displayName = 'KitAlert';
