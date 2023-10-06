import React, {ReactNode, createContext, useContext, useState} from 'react';
import {IKitLocale, LanguageSupported} from './types';
import {frFR} from './fr-FR';
import {merge} from 'lodash';
import {enUS} from './en-US';

type KitLocaleContext =
    | {
          locale: IKitLocale;
          setKitLocale: (locale: IKitLocale) => void;
      }
    | undefined;

const KitLocaleContext = createContext<KitLocaleContext>(undefined);

export const useKitLocale = () => {
    const context = useContext(KitLocaleContext);
    if (context === undefined) {
        throw new Error('You need to encapsulate component inside a KitApp, useKitLocale must be inside a context');
    }
    return context;
};

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
