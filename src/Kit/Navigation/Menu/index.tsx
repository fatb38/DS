import InternalMenu from './Menu';
import InternalItemMenu from './ItemMenu';
import {IKitItemMenu, IKitMenu} from './types';
import {FunctionComponent} from 'react';

type CompoundedComponent = FunctionComponent<IKitMenu> & {
    Item: FunctionComponent<IKitItemMenu>;
};

/**
 * @deprecated will be removed in v.9.0.0
 */
export const KitMenu = InternalMenu as unknown as CompoundedComponent;

KitMenu.displayName = 'KitMenu';
KitMenu.Item = InternalItemMenu;
