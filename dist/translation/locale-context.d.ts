import React, { ReactNode } from 'react';
import { IKitLocale } from './types';
export declare const useKitLocale: () => {
    locale: IKitLocale;
    setKitLocale: (locale: IKitLocale) => void;
};
export declare const KitLocaleProvider: ({ children }: {
    children: ReactNode;
}) => React.JSX.Element;
