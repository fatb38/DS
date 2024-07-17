import {Locale} from 'antd/es/locale';
import {IKitItemListLocale} from './components/DataDisplay/ItemList';
import {IKitImageLocale} from './components/DataDisplay/Image';
import {IKitCollapseLocale} from './components/DataDisplay/Collapse';
import {IKitEmptyLocale} from './components/DataDisplay/Empty';
import {IKitErrorLocale} from './components/DataDisplay/Error';

type LanguageSupported = 'frFR' | 'enUS';

export interface IKitLocale extends Locale {
    locale?: LanguageSupported;
    Collapse?: IKitCollapseLocale;
    Empty?: IKitEmptyLocale;
    Error?: IKitErrorLocale;
    Image?: IKitImageLocale;
    ItemList?: IKitItemListLocale;
}
