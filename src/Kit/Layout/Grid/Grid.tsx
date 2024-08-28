import {Children, cloneElement, CSSProperties, FunctionComponent, isValidElement, ReactElement, useState} from 'react';
import type {IKitGrid, IKitRow} from './types';
import cn from 'classnames';
import styles from './styles.module.scss';
import {useKitTheme} from '@theme/useKitTheme';
import {KitSideMenu} from '@kit/Navigation';
import {useKitGrid} from './useGridContext';

export const Grid: FunctionComponent<IKitGrid> = ({
    className,
    menuOpen = false,
    rowGap,
    sideMenuProps,
    breakpoint = 'auto',
    ...props
}) => {
    const {appId, theme} = useKitTheme();
    const {breakpoint: currentBreakpoint} = useKitGrid();
    const [sideMenuOpen, setSideMenuOpen] = useState(menuOpen);

    const handleOnOpenChanged = (open: boolean) => {
        setSideMenuOpen(open);

        if (sideMenuProps?.onOpenChanged) {
            sideMenuProps?.onOpenChanged(open);
        }
    };

    const hideMenu = breakpoint === 'auto' ? theme.grid[currentBreakpoint]?.noMenu : theme.grid[breakpoint]?.noMenu;

    const childrenWithProps = Children.map(props.children, child => {
        if (isValidElement(child)) {
            return cloneElement(child as ReactElement<IKitRow>, {
                menuOpen: sideMenuOpen,
                breakpoint
            });
        }
        return child;
    });

    const clx = cn(
        appId,
        styles['kit-grid'],
        {
            ['withMenu']: sideMenuProps && !hideMenu
        },
        className
    );

    const style = rowGap ? {'--kit-Grid-rowGap': `${rowGap}px`} : {};

    return (
        <div {...props} className={clx} style={style as CSSProperties}>
            {sideMenuProps && !hideMenu && <KitSideMenu {...sideMenuProps} onOpenChanged={handleOnOpenChanged} />}
            {childrenWithProps}
        </div>
    );
};
