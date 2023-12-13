import {createContext, useContext} from 'react';
import {IKitLocale} from './types';

type KitLocaleContext =
    | {
          locale: IKitLocale;
          setKitLocale: (locale: IKitLocale) => void;
      }
    | undefined;

export const KitLocaleContext = createContext<KitLocaleContext>(undefined);

export const useKitLocale = () => {
    const context = useContext(KitLocaleContext);
    if (context === undefined) {
        throw new Error('You need to encapsulate component inside a KitApp, useKitLocale must be inside a context');
    }
    return context;
};
