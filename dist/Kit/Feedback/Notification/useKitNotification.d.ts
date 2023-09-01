import React from 'react';
import { KitNotification } from './types';
interface KitNotificationContext {
    kitNotification: KitNotification;
}
declare const KitNotificationContext: React.Context<KitNotificationContext | undefined>;
declare function useKitNotification(): KitNotificationContext;
declare const KitNotificationProvider: ({ children }: {
    children: any;
}) => React.JSX.Element;
export { KitNotificationProvider, useKitNotification };
