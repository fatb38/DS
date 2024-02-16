import React, {FunctionComponent} from 'react';
import {Alert as AntdAlert} from 'antd';
import {IKitAlert} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faXmark,
    faCircleInfo,
    faCircleCheck,
    faCircleXmark,
    faCircleExclamation
} from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

import styles from './styles.module.scss';

export const KitAlert: FunctionComponent<IKitAlert> = ({type, className, ...alertProps}) => {
    const {appId} = useKitTheme();

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

    const clx = cn(appId, styles['kit-alert'], className);

    return (
        <AntdAlert
            {...alertProps}
            closeIcon={<FontAwesomeIcon icon={faXmark} />}
            icon={_getIcon()}
            type={type}
            className={clx}
        />
    );
};

KitAlert.displayName = 'KitAlert';
