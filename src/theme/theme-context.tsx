import React, {ReactNode, createContext, useState} from 'react';

// TODO: Later add option to have more arisitd themes
import {KitDefaultTheme} from './aristid';
import {merge} from 'lodash';

const defaultValue = {
    theme: KitDefaultTheme,
    overrideTheme: () => {}
};

// TODO: type value
const KitThemeContext = createContext<{theme: any; overrideTheme: any}>(defaultValue);

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

const useKitThemeProvider = (customTheme?: any) => {
    const [theme, setTheme] = useState(KitDefaultTheme);

    const overrideTheme = () => {
        const mergedTheme = merge(KitDefaultTheme, customTheme);
        // const mergedTheme = {...KitDefaultTheme, ...customTheme};
        setTheme(mergedTheme);
    };

    return {theme, overrideTheme};
};
