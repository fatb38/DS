import enUS from 'antd/locale/en_US';
import frFR from 'antd/locale/fr_FR';
import {IKitLocale} from '../types';

export const mapKitLocaleToAntdLocale = (kitTranslation?: IKitLocale) => {
    switch (kitTranslation?.locale) {
        case 'enUS':
            return enUS;
        case 'frFR':
            return frFR;
        default:
            return enUS;
    }
};
