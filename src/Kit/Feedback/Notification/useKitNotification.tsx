import React, {Key, createContext, useContext} from 'react';
import {CheckCircleOutlined, CloseCircleOutlined, ExclamationCircleOutlined, WarningOutlined} from '@ant-design/icons';
import {KitIcon} from '@kit/General/Icon';
import notification from 'antd/lib/notification';
import {NotificationInstance} from 'antd/lib/notification/interface';
import {IKitNotification, IKitNotificationArgs, IKitNotificationContext} from './types';
import {useKitTheme} from '@theme/theme-context';

const KitNotificationContext = createContext<IKitNotificationContext | undefined>(undefined);

export function useKitNotification() {
    const context = useContext(KitNotificationContext);
    if (context === undefined) {
        throw new Error('useKitNotification must be inside a context');
    }
    return context as IKitNotificationContext;
}

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
                    icon={<CloseCircleOutlined />}
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
                    icon={<WarningOutlined />}
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
                    icon={<CheckCircleOutlined />}
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
                    icon={<ExclamationCircleOutlined />}
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

    const kitNotification: IKitNotification = {error, warning, success, info, open, destroy};
    return {kitNotification};
};
