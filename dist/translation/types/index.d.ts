import {Locale} from 'antd/lib/locale';
import {IKitItemListLocale} from './components/DataDisplay/ItemList';
import {IKitItemCardLocale} from './components/DataDisplay/ItemCard';

type LanguageSupported = 'frFR' | 'enUS';

export interface IKitLocale extends Locale {
    locale: LanguageSupported;
    ItemList: IKitItemListLocale;
    ItemCard: IKitItemCardLocale;
}
