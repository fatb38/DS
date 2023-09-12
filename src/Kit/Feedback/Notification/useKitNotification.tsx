import React, {createContext, useContext} from 'react';
import {CheckCircleOutlined, CloseCircleOutlined, ExclamationCircleOutlined, WarningOutlined} from '@ant-design/icons';
import {KitIcon} from '@kit/General/Icon';
import {notification} from 'antd';
import theme from '@theme/index';
import {NotificationInstance} from 'antd/es/notification/interface';
import type {IKitNotificationContext, KitNotification, KitNotificationArgsProps} from './types';

const {color} = theme;

const KitNotificationContext = createContext<IKitNotificationContext | undefined>(undefined);

export function useKitNotification(): IKitNotificationContext {
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

const useKitNotificationProvider = (api: NotificationInstance): IKitNotificationContext => {
    const error = (args: KitNotificationArgsProps) => {
        api.error({
            ...args,
            icon: (
                <KitIcon
                    style={{
                        color: color.secondary.red.red400,
                        backgroundColor: color.secondary.red.red100
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
                        color: color.secondary.orange.orange400,
                        backgroundColor: color.secondary.orange.orange100
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
                        color: color.secondary.green.green400,
                        backgroundColor: color.secondary.green.green100
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
                        color: color.primary.blue400,
                        backgroundColor: color.primary.blue100
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

    const kitNotification: KitNotification = {error, warning, success, info, open, destroy};
    return {kitNotification};
};
