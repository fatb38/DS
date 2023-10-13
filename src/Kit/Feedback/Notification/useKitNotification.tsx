import React, {Key, createContext, useContext} from 'react';
import {KitIcon} from '@kit/General/Icon';
import notification from 'antd/lib/notification';
import {NotificationInstance} from 'antd/lib/notification/interface';
import {IKitNotificationArgs, IKitNotificationContext} from './types';
import {useKitTheme} from '@theme/theme-context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamation, faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';
import {faCircleCheck, faCircleXmark} from '@fortawesome/free-regular-svg-icons';

const KitNotificationContext = createContext<IKitNotificationContext | undefined>(undefined);

function useKitNotification() {
    const context = useContext(KitNotificationContext);
    if (context === undefined) {
        throw new Error('useKitNotification must be inside a context');
    }
    return context;
}

const KitNotificationProvider = ({children}) => {
    const [api, contextHolder] = notification.useNotification();
    return (
        <KitNotificationContext.Provider value={useKitNotificationProvider(api)}>
            {children}
            {contextHolder}
        </KitNotificationContext.Provider>
    );
};

const useKitNotificationProvider = (api: NotificationInstance) => {
    const {theme: kitTheme} = useKitTheme();
    const theme = kitTheme.components.Notification;

    const error = (args: IKitNotificationArgs) => {
        api.error({
            ...args,
            icon: (
                <KitIcon
                    style={{
                        color: theme.colors.icon.error,
                        backgroundColor: theme.colors.icon.background.error
                    }}
                    icon={<FontAwesomeIcon icon={faCircleXmark} />}
                    on
                />
            )
        });
    };
    const warning = (args: IKitNotificationArgs) => {
        api.warning({
            ...args,
            icon: (
                <KitIcon
                    style={{
                        color: theme.colors.icon.warning,
                        backgroundColor: theme.colors.icon.background.warning
                    }}
                    icon={<FontAwesomeIcon icon={faTriangleExclamation} />}
                    on
                />
            )
        });
    };
    const success = (args: IKitNotificationArgs) => {
        api.success({
            ...args,
            icon: (
                <KitIcon
                    style={{
                        color: theme.colors.icon.success,
                        backgroundColor: theme.colors.icon.background.success
                    }}
                    icon={<FontAwesomeIcon icon={faCircleCheck} />}
                    on
                />
            )
        });
    };
    const info = (args: IKitNotificationArgs) => {
        api.info({
            ...args,
            icon: (
                <KitIcon
                    style={{
                        color: theme.colors.icon.info,
                        backgroundColor: theme.colors.icon.background.info
                    }}
                    icon={<FontAwesomeIcon style={{aspectRatio: 1}} icon={faExclamation} />}
                    on
                />
            )
        });
    };

    const open = (args: IKitNotificationArgs) => {
        api.open({...args});
    };

    const destroy = (key?: Key) => {
        api.destroy(key);
    };

    const kitNotification = {error, warning, success, info, open, destroy};
    return {kitNotification};
};

export {KitNotificationProvider, useKitNotification};
