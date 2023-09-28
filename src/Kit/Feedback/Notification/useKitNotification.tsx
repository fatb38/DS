import React, {createContext, useContext} from 'react';
import {CheckCircleOutlined, CloseCircleOutlined, ExclamationCircleOutlined, WarningOutlined} from '@ant-design/icons';
import {KitIcon} from '@kit/General/Icon';
import notification from 'antd/lib/notification';
import {NotificationInstance} from 'antd/lib/notification/interface';
import {KitNotification, KitNotificationArgsProps} from './types';
import {useKitTheme} from '@theme/theme-context';

interface KitNotificationContext {
    kitNotification: KitNotification;
}

const KitNotificationContext = createContext<KitNotificationContext | undefined>(undefined);

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
    const {theme} = useKitTheme();
    const notificationTheme = theme.components.Notification;

    const error = (args: KitNotificationArgsProps) => {
        api.error({
            ...args,
            icon: (
                <KitIcon
                    style={{
                        color: notificationTheme.colors.icon.error,
                        backgroundColor: notificationTheme.colors.icon.background.error
                    }}
                    icon={<CloseCircleOutlined />}
                    on
                />
            )
        });
    };
    const warning = (args: KitNotificationArgsProps) => {
        api.warning({
            ...args,
            icon: (
                <KitIcon
                    style={{
                        color: notificationTheme.colors.icon.warning,
                        backgroundColor: notificationTheme.colors.icon.background.warning
                    }}
                    icon={<WarningOutlined />}
                    on
                />
            )
        });
    };
    const success = (args: KitNotificationArgsProps) => {
        api.success({
            ...args,
            icon: (
                <KitIcon
                    style={{
                        color: notificationTheme.colors.icon.success,
                        backgroundColor: notificationTheme.colors.icon.background.success
                    }}
                    icon={<CheckCircleOutlined />}
                    on
                />
            )
        });
    };
    const info = (args: KitNotificationArgsProps) => {
        api.info({
            ...args,
            icon: (
                <KitIcon
                    style={{
                        color: notificationTheme.colors.icon.info,
                        backgroundColor: notificationTheme.colors.icon.background.info
                    }}
                    icon={<ExclamationCircleOutlined />}
                    on
                />
            )
        });
    };

    const open = (args: KitNotificationArgsProps) => {
        api.open({...args});
    };

    const destroy = (key?: React.Key) => {
        api.destroy(key);
    };

    const kitNotification = {error, warning, success, info, open, destroy};
    return {kitNotification};
};

export {KitNotificationProvider, useKitNotification};
