import {IKitLocale} from '../types';
import {KitCollapseLocale} from './components/DataDisplay/Collapse';
import {KitEmptyLocale} from './components/DataDisplay/Empty';
import {KitImageLocale} from './components/DataDisplay/Image';
import {KitItemCardLocale} from './components/DataDisplay/ItemCard';
import {KitItemListLocale} from './components/DataDisplay/ItemList';

export const enUS: IKitLocale = {
    locale: 'enUS',
    Collapse: KitCollapseLocale,
    Empty: KitEmptyLocale,
    Image: KitImageLocale,
    ItemList: KitItemListLocale,
    ItemCard: KitItemCardLocale
};
