import {Locale} from 'antd/es/locale';
import {IKitItemListLocale} from './components/DataDisplay/ItemList';
import {IKitImageLocale} from './components/DataDisplay/Image';
import {IKitCollapseLocale} from './components/DataDisplay/Collapse';
import {IKitEmptyLocale} from './components/DataDisplay/Empty';
import {IKitErrorLocale} from './components/DataDisplay/Error';
import {IKitGeneralLocale} from './general';
import {IKitAlertLocale} from './components/Feedback/Alert';
import {IKitRichTextLocale} from './components/DataEntry/RichText';

type LanguageSupported = 'frFR' | 'enUS';

export interface IKitLocale extends Locale {
    locale?: LanguageSupported;
    General?: IKitGeneralLocale;
    Collapse?: IKitCollapseLocale;
    Alert?: IKitAlertLocale;
    Empty?: IKitEmptyLocale;
    Error?: IKitErrorLocale;
    Image?: IKitImageLocale;
    ItemList?: IKitItemListLocale;
    RichText?: IKitRichTextLocale;
}
