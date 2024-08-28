import {IKitSideMenu} from '@kit/Navigation/SideMenu/types';
import {FunctionComponent, ReactNode, CSSProperties} from 'react';

type flexAlignment = 'start' | 'center' | 'end';

export interface IKitRow extends KitHTMLAttributes<HTMLDivElement> {
    menuOpen?: boolean;
    breakpoint?: string;
    align?: flexAlignment;
    gap?: number;
    className?: string;
    children?: ReactNode;
    style?: CSSProperties;
}

export interface IKitCol extends KitHTMLAttributes<HTMLDivElement> {
    span?: number;
    col?: number | 'auto';
    alignSelf?: flexAlignment;
    align?: flexAlignment;
    justify?: flexAlignment;
    flex?: boolean;
    fullWidth?: boolean;
    className?: string;
    children?: ReactNode;
    style?: CSSProperties;
}

export interface IKitGrid extends KitHTMLAttributes<HTMLDivElement> {
    menuOpen?: boolean;
    sideMenuProps?: IKitSideMenu;
    rowGap?: number;
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    breakpoint?: string;
}

export type KitGridCompoundedComponent = FunctionComponent<IKitGrid> & {
    Row: FunctionComponent<IKitRow>;
    Col: FunctionComponent<IKitCol>;
    displayName?: string;
};
