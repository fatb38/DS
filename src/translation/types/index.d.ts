import {Locale} from 'antd/es/locale';
import {IKitItemListLocale} from './components/DataDisplay/ItemList';
import {IKitItemCardLocale} from './components/DataDisplay/ItemCard';
import {IKitImageLocale} from './components/DataDisplay/Image';
import {IKitCollapseLocale} from './components/DataDisplay/Collapse';
import {IKitEmptyLocale} from './components/DataDisplay/Empty';

type LanguageSupported = 'frFR' | 'enUS';

export interface IKitLocale extends Locale {
    locale?: LanguageSupported;
    Collapse?: IKitCollapseLocale;
    Empty?: IKitEmptyLocale;
    Image?: IKitImageLocale;
    ItemList?: IKitItemListLocale;
    ItemCard?: IKitItemCardLocale;
}
