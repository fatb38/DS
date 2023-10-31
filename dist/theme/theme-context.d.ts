import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { IKitCustomTheme, IKitTheme } from './types';
export declare const useKitTheme: () => {
    theme: IKitTheme;
    setCustomTheme: Dispatch<SetStateAction<IKitCustomTheme | undefined>>;
};
export declare const KitThemeProvider: ({ children }: {
    children: ReactNode;
}) => React.JSX.Element;
