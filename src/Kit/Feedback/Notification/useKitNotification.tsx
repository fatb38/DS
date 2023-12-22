import {useContext} from 'react';
import {KitNotificationContext} from './notification-provider';

export function useKitNotification() {
    const context = useContext(KitNotificationContext);
    if (context === undefined) {
        throw new Error('useKitNotification must be inside a context');
    }
    return context;
}
