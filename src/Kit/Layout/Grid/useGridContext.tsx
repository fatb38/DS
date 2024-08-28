import {useContext} from 'react';
import {KitGridContext} from './GridContext';

export const useKitGrid = () => {
    const context = useContext(KitGridContext);
    if (context === undefined) {
        throw new Error(
            'You need to encapsulate component inside a KitApp, useKitGrid must be inside a KitGridContext context'
        );
    }
    return context;
};
