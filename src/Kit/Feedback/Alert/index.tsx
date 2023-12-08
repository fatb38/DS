import React, {FunctionComponent} from 'react';
import {Alert as AntdAlert} from 'antd';
import {IKitAlert, IStyledKitAlert} from './types';
import {styled} from 'styled-components';
import {useKitTheme} from '@theme/theme-context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faXmark,
    faCircleInfo,
    faCircleCheck,
    faCircleXmark,
    faCircleExclamation
} from '@fortawesome/free-solid-svg-icons';

const StyledAntdAlert = styled(AntdAlert)<IStyledKitAlert>`
    &.ant-alert-with-description {
        padding-inline: 0px;
        padding-block: 0px;
        padding: 8px 16px;

        .ant-alert-message {
            margin-bottom: 6px;
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

    .fa-icon {
        font-size: ${({$theme}) => $theme.icon.alert.size}px;
        margin-inline-end: 8px;
    }

    &.ant-alert-with-description .fa-icon {
        margin-top: 3px;
    }

    &.ant-alert-success {
        svg {
            color: ${({$theme}) => $theme.colors.icon.alert.success};
        }
    }

    &.ant-alert-info {
        svg {
            color: ${({$theme}) => $theme.colors.icon.alert.info};
        }
    }

    &.ant-alert-warning {
        svg {
            color: ${({$theme}) => $theme.colors.icon.alert.warning};
        }
    }

    &.ant-alert-error {
        svg {
            color: ${({$theme}) => $theme.colors.icon.alert.error};
        }
    }
`;

export const KitAlert: FunctionComponent<IKitAlert> = ({type, ...alertProps}) => {
    const {theme} = useKitTheme();

    const _getIcon = () => {
        switch (type) {
            case 'info':
                return <FontAwesomeIcon className="fa-icon" icon={faCircleInfo} />;
            case 'success':
                return <FontAwesomeIcon className="fa-icon" icon={faCircleCheck} />;
            case 'warning':
                return <FontAwesomeIcon className="fa-icon" icon={faCircleExclamation} />;
            case 'error':
                return <FontAwesomeIcon className="fa-icon" icon={faCircleXmark} />;
        }
    };

    return (
        <StyledAntdAlert
            $theme={theme.components.Alert}
            closeIcon={<FontAwesomeIcon icon={faXmark} />}
            icon={_getIcon()}
            type={type}
            {...alertProps}
        />
    );
};

KitAlert.displayName = 'KitAlert';
