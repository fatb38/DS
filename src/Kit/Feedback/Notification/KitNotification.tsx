import classNames from 'classnames';
import React from 'react';
import {IKitNotificationArgs} from './types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faCircleCheck,
    faCircleXmark,
    faExclamation,
    faTimes,
    faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons';
import {getErrorStyle, getInfoStyle, getSuccessStyle, getWarningStyle} from './style';
import {KitIcon, KitTypography} from '@kit/General';
import {KitSpace} from '@kit/Layout';

import styles from './styles.module.scss';

export const KitNotification: React.FC<IKitNotificationArgs> = ({
    message,
    description,
    messageExtra,
    icon,
    closeIcon,
    type,
    btn,
    className,
    onClose,
    ...props
}) => {
    const clx = classNames(
        styles['kit-notification'],
        {
            'kit-notification-info': type === 'info',
            'kit-notification-warning': type === 'warning',
            'kit-notification-error': type === 'error',
            'kit-notification-success': type === 'success',
            'kit-notification-closable': onClose
        },
        className
    );

    const getIcon = () => {
        if (icon) {
            return icon;
        }

        let style = {};
        let _icon = faExclamation;

        switch (type) {
            case 'info':
                style = getInfoStyle();
                break;
            case 'warning':
                style = getWarningStyle();
                _icon = faTriangleExclamation;
                break;
            case 'error':
                style = getErrorStyle();
                _icon = faCircleXmark;
                break;
            case 'success':
                style = getSuccessStyle();
                _icon = faCircleCheck;
                break;
            default:
                return null;
        }

        return <KitIcon style={style} icon={<FontAwesomeIcon icon={_icon} />} on />;
    };

    return (
        <div {...props} className={clx}>
            <div className="kit-notification-content">
                {(icon || type) && <div className="kit-notification-icon">{getIcon()}</div>}
                <KitTypography.Text className="kit-notification-title" ellipsis={{tooltip: message}}>
                    {message}
                </KitTypography.Text>
                <KitTypography.Text className="kit-notification-subtitle" ellipsis={{tooltip: messageExtra}}>
                    {messageExtra}
                </KitTypography.Text>
                <KitTypography.Text className="kit-notification-message">{description}</KitTypography.Text>
                {onClose && (
                    <div className="kit-notification-close" onClick={onClose}>
                        {closeIcon || <FontAwesomeIcon icon={faTimes} />}
                    </div>
                )}
                {btn && (
                    <div className="kit-notification-buttons">
                        <KitSpace>{btn}</KitSpace>
                    </div>
                )}
            </div>
        </div>
    );
};
