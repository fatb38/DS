import {IKitLocale} from '../types';
import {KitItemListLocale} from './components/DataDisplay/ItemList';
import {KitImageLocale} from './components/DataDisplay/Image';
import {KitCollapseLocale} from './components/DataDisplay/Collapse';
import {KitEmptyLocale} from './components/DataDisplay/Empty';
import {KitErrorLocale} from './components/DataDisplay/Error';
import {KitGeneralLocale} from './general';

export const frFR: IKitLocale = {
    locale: 'frFR',
    General: KitGeneralLocale,
    Collapse: KitCollapseLocale,
    Empty: KitEmptyLocale,
    Error: KitErrorLocale,
    Image: KitImageLocale,
    ItemList: KitItemListLocale
};
