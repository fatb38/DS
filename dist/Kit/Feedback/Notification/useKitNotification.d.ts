import React from 'react';
import { IKitNotificationContext } from './types';
declare function useKitNotification(): IKitNotificationContext;
declare const KitNotificationProvider: ({ children }: {
    children: any;
}) => React.JSX.Element;
export { KitNotificationProvider, useKitNotification };
