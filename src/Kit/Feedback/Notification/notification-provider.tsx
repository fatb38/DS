import React, {Key, createContext} from 'react';
import {KitIcon} from '@kit/General/Icon';
import notification from 'antd/lib/notification';
import {NotificationInstance} from 'antd/lib/notification/interface';
import {IKitNotification, IKitNotificationArgs, IKitNotificationContext} from './types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamation, faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';
import {faCircleCheck, faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import {useKitTheme} from '@theme/useKitTheme';
import {getErrorStyle, getInfoStyle, getSuccessStyle, getWarningStyle} from './style';

export const KitNotificationContext = createContext<IKitNotificationContext | undefined>(undefined);

export const KitNotificationProvider = ({children}) => {
    const [api, contextHolder] = notification.useNotification();
    const value = useKitNotificationProvider(api);

    return (
        <KitNotificationContext.Provider value={value}>
            {children}
            {contextHolder}
        </KitNotificationContext.Provider>
    );
};

const useKitNotificationProvider = (api: NotificationInstance) => {
    const {appId} = useKitTheme();

    const error = (args: IKitNotificationArgs) => {
        api.error({
            ...args,
            icon: <KitIcon style={getErrorStyle()} icon={<FontAwesomeIcon icon={faCircleXmark} />} on />,
            className: `${appId} ${args.className ?? ''}`
        });
    };
    const warning = (args: IKitNotificationArgs) => {
        api.warning({
            ...args,
            icon: <KitIcon style={getWarningStyle()} icon={<FontAwesomeIcon icon={faTriangleExclamation} />} on />,
            className: `${appId} ${args.className ?? ''}`
        });
    };
    const success = (args: IKitNotificationArgs) => {
        api.success({
            ...args,
            icon: <KitIcon style={getSuccessStyle()} icon={<FontAwesomeIcon icon={faCircleCheck} />} on />,
            className: `${appId} ${args.className ?? ''}`
        });
    };
    const info = (args: IKitNotificationArgs) => {
        api.info({
            ...args,
            icon: <KitIcon style={getInfoStyle()} icon={<FontAwesomeIcon icon={faExclamation} />} on />,
            className: `${appId} ${args.className ?? ''}`
        });
    };

    const open = (args: IKitNotificationArgs) => {
        api.open({...args, className: `${appId} ${args.className ?? ''}`});
    };

    const destroy = (key?: Key) => {
        api.destroy(key);
    };

    const kitNotification: IKitNotification = {error, warning, success, info, open, destroy};
    return {kitNotification};
};
