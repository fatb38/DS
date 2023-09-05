import React, {ReactNode, createContext, useState} from 'react';

// TODO: Later add option to have more arisitd themes
import {KitAristidTheme} from './aristid';
import {merge} from 'lodash';
import {KitCustomTheme, KitTheme} from './types';

const defaultValue = {
    theme: KitAristidTheme,
    overrideTheme: () => {}
};

const KitThemeContext = createContext<{
    theme: KitTheme;
    overrideTheme: (customTheme?: KitCustomTheme) => void;
}>(defaultValue);

export const useKitTheme = () => {
    const context = React.useContext(KitThemeContext);
    if (context === undefined) {
        throw new Error('useKitTheme must be inside a context');
    }
    return context;
};

export const KitThemeProvider = ({children}: {children: ReactNode}) => {
    const value = useKitThemeProvider();
    return <KitThemeContext.Provider value={value}>{children}</KitThemeContext.Provider>;
};

const useKitThemeProvider = () => {
    const [theme, setTheme] = useState(KitAristidTheme);

    const overrideTheme = (customTheme?: KitCustomTheme) => {
        const mergedTheme = merge(KitAristidTheme, customTheme);
        setTheme(mergedTheme);
    };

    return {theme, overrideTheme};
};
