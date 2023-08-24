import React, {createContext, useContext} from 'react';
import {CheckCircleOutlined, CloseCircleOutlined, ExclamationCircleOutlined, WarningOutlined} from '@ant-design/icons';
import {KitIcon} from '@kit/General/Icon';
import notification from 'antd/lib/notification';
import {NotificationInstance} from 'antd/lib/notification/interface';
import {KitNotification, KitNotificationArgsProps} from './types';
import {colorsPalette} from '../../..';

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
    const error = (args: KitNotificationArgsProps) => {
        api.error({
            ...args,
            icon: (
                <KitIcon
                    style={{
                        color: colorsPalette.secondary.red.red400,
                        backgroundColor: colorsPalette.secondary.red.red100
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
                        color: colorsPalette.secondary.orange.orange400,
                        backgroundColor: colorsPalette.secondary.orange.orange100
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
                        color: colorsPalette.secondary.green.green400,
                        backgroundColor: colorsPalette.secondary.green.green100
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
                        color: colorsPalette.primary.blue400,
                        backgroundColor: colorsPalette.primary.blue100
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
