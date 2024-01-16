import {IKitLocale} from '../types';
import {KitCollapseLocale} from './components/DataDisplay/Collapse';
import {KitImageLocale} from './components/DataDisplay/Image';
import {KitItemCardLocale} from './components/DataDisplay/ItemCard';
import {KitItemListLocale} from './components/DataDisplay/ItemList';

export const enUS: IKitLocale = {
    locale: 'enUS',
    Image: KitImageLocale,
    Collapse: KitCollapseLocale,
    ItemList: KitItemListLocale,
    ItemCard: KitItemCardLocale
};
