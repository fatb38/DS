import {ArgsProps} from 'antd/lib/notification/interface';

export type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

export interface KitNotificationArgsProps extends ArgsProps {
    placement?: NotificationPlacement;
}

type KitNotificationStaticFn = (args: KitNotificationArgsProps) => void;

export interface KitNotification {
    error: KitNotificationStaticFn;
    warning: KitNotificationStaticFn;
    success: KitNotificationStaticFn;
    info: KitNotificationStaticFn;
    destroy: (key?: React.Key) => void;
    open: KitNotificationStaticFn;
}
