import React, { ReactNode } from 'react';
import { KitCustomTheme, KitTheme } from './types';
export declare const useKitTheme: () => {
    theme: KitTheme;
    overrideTheme: (customTheme?: KitCustomTheme) => void;
};
export declare const KitThemeProvider: ({ children }: {
    children: ReactNode;
}) => React.JSX.Element;
