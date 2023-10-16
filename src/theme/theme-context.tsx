import React, {Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState} from 'react';

// TODO: Later add option to have more arisitd themes
import {getKitAristidTheme} from './aristid';
import {IKitCustomTheme, IKitTheme} from './types';
import {merge} from 'lodash';

type KitThemeContext =
    | {
          theme: IKitTheme;
          setCustomTheme: Dispatch<SetStateAction<IKitCustomTheme | undefined>>;
      }
    | undefined;

const KitThemeContext = createContext<KitThemeContext>(undefined);

export const useKitTheme = () => {
    const context = React.useContext(KitThemeContext);
    if (context === undefined) {
        throw new Error('You need to encapsulate component inside a KitApp, useKitTheme must be inside a context');
    }
    return context;
};

export const KitThemeProvider = ({children}: {children: ReactNode}) => {
    const value = useKitThemeProvider();
    return <KitThemeContext.Provider value={value}>{children}</KitThemeContext.Provider>;
};

const defaultKitAristidTheme = getKitAristidTheme();

const useKitThemeProvider = () => {
    const [theme, setTheme] = useState<IKitTheme>(defaultKitAristidTheme);
    const [customTheme, setCustomTheme] = useState<IKitCustomTheme>();

    useEffect(() => {
        if (customTheme !== undefined) {
            const kitTheme = getKitAristidTheme(customTheme['general']);
            const kitComponentsTheme = merge(kitTheme['components'], customTheme['components']);

            setTheme({...kitTheme, components: kitComponentsTheme});
        }
    }, [customTheme]);

    return {theme, setCustomTheme};
};
