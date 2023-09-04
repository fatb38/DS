import React, {ReactNode, createContext, useState} from 'react';

// TODO: Later add option to have more arisitd themes
import {KitDefaultTheme} from './aristid';
import {merge} from 'lodash';
import {KitCustomThemeProps, KitThemeProps} from './types';

const defaultValue = {
    theme: KitDefaultTheme,
    overrideTheme: () => {}
};

const KitThemeContext = createContext<{
    theme: KitThemeProps;
    overrideTheme: (customTheme?: KitCustomThemeProps) => void;
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
    const [theme, setTheme] = useState(KitDefaultTheme);

    const overrideTheme = (customTheme?: KitCustomThemeProps) => {
        const mergedTheme = merge(KitDefaultTheme, customTheme);
        setTheme(mergedTheme);
    };

    return {theme, overrideTheme};
};
