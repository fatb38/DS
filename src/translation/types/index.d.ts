import {Locale} from 'antd/lib/locale';
import {IKitItemListLocale} from './components/DataDisplay/ItemList';
import {IKitItemCardLocale} from './components/DataDisplay/ItemCard';
import {IKitImageLocale} from './components/DataDisplay/Image';

type LanguageSupported = 'frFR' | 'enUS';

export interface IKitLocale extends Locale {
    locale: LanguageSupported;
    Image: IKitImageLocale;
    ItemList: IKitItemListLocale;
    ItemCard: IKitItemCardLocale;
}
