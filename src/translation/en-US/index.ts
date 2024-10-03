import {IKitLocale} from '../types';
import {KitCollapseLocale} from './components/DataDisplay/Collapse';
import {KitEmptyLocale} from './components/DataDisplay/Empty';
import {KitErrorLocale} from '@translation/en-US/components/DataDisplay/Error';
import {KitImageLocale} from './components/DataDisplay/Image';
import {KitItemListLocale} from './components/DataDisplay/ItemList';
import {KitGeneralLocale} from './general';
import {KitAlertLocale} from './components/Alert';
import {KitRichTextLocale} from './components/DataEntry/RichText';

export const enUS: IKitLocale = {
    locale: 'enUS',
    General: KitGeneralLocale,
    Collapse: KitCollapseLocale,
    Alert: KitAlertLocale,
    Empty: KitEmptyLocale,
    Error: KitErrorLocale,
    Image: KitImageLocale,
    ItemList: KitItemListLocale,
    RichText: KitRichTextLocale
};
