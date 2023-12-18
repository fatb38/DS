import {createContext, useContext} from 'react';
import {IKitTheme, IKitThemeGeneral} from './types';

type KitThemeContext =
    | {
          theme: IKitTheme;
          appId: string;
          spacing: IKitThemeGeneral['spacing'];
      }
    | undefined;

export const KitThemeContext = createContext<KitThemeContext>(undefined);

export const useKitTheme = () => {
    const context = useContext(KitThemeContext);
    if (context === undefined) {
        throw new Error('You need to encapsulate component inside a KitApp, useKitTheme must be inside a context');
    }
    return context;
};
