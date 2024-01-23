import {ArgsProps} from 'antd/lib/notification/interface';

type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

type AntdArgsPropsTypesToOmit = 'message' | 'description' | 'placement';

export interface IKitNotificationArgs extends Omit<ArgsProps, AntdArgsPropsTypesToOmit> {
    message: string;
    messageExtra?: string;
    description: string;
    placement?: NotificationPlacement;
}

type KitNotificationStaticFn = (args: IKitNotificationArgs) => void;

export interface IKitNotification {
    error: KitNotificationStaticFn;
    warning: KitNotificationStaticFn;
    success: KitNotificationStaticFn;
    info: KitNotificationStaticFn;
    destroy: (key?: React.Key) => void;
    open: KitNotificationStaticFn;
}

export interface IKitNotificationContext {
    kitNotification: IKitNotification;
}
