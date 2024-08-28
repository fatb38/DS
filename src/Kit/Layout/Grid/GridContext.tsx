import {createContext, ReactNode, useEffect, useMemo, useState} from 'react';
import {useKitTheme} from '@theme/useKitTheme';

export type GridContext = {
    breakpoint: string;
    columns: number;
    noMenu: boolean;
};

export const KitGridContext = createContext<GridContext>({
    breakpoint: '',
    columns: 1,
    noMenu: false
});

export const KitGridProvider = ({children}: {children: ReactNode}) => {
    const value = useKitGridProvider();
    return <KitGridContext.Provider value={value}>{children}</KitGridContext.Provider>;
};

const useKitGridProvider = () => {
    const {theme} = useKitTheme();
    const [breakpoint, setBreakpoint] = useState('');

    const breakpoints = useMemo(() => [...theme.breakpoints], [theme.breakpoints]);

    useEffect(() => {
        const handleWindowResize = () => {
            let curentBreakpoint = '';
            if (window.innerWidth > theme.grid[theme.breakpoints[0]].width) {
                curentBreakpoint = breakpoints[0];
            } else {
                curentBreakpoint = breakpoints.reduce((acc, breakpoint) => {
                    if (window.innerWidth <= theme.grid[breakpoint].width) {
                        acc = breakpoint;
                    }
                    return acc;
                }, '');
            }

            setBreakpoint(curentBreakpoint);
        };
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // no dependencies here as we want it to be launch only on mount and unmount

    return {breakpoint, columns: theme.grid[breakpoint]?.columns ?? 1, noMenu: theme.grid[breakpoint]?.noMenu ?? false};
};
