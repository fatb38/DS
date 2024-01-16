import React, {ReactNode, useState} from 'react';
import {IKitLocale, LanguageSupported} from './types';
import {frFR} from './fr-FR';
import merge from 'lodash/merge';
import {enUS} from './en-US';
import {KitLocaleContext} from './useKitLocale';

export const KitLocaleProvider = ({children}: {children: ReactNode}) => {
    const value = useKitLocaleProvider();
    return <KitLocaleContext.Provider value={value}>{children}</KitLocaleContext.Provider>;
};

const useKitLocaleProvider = () => {
    const [locale, setLocale] = useState<IKitLocale>(frFR);

    const setKitLocale = (customLocale: IKitLocale) => {
        if (customLocale.locale === ('frFR' as LanguageSupported)) {
            const mergedLocaleFrFR = merge(frFR, customLocale);
            setLocale(mergedLocaleFrFR);
        } else {
            const mergedLocaleEnUS = merge(enUS, customLocale);
            setLocale(mergedLocaleEnUS);
        }
    };

    return {locale, setKitLocale};
};
