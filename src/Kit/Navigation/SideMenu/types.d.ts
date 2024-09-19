import {ReactNode} from 'react';
import {KitHTMLAttributes} from '../../../types';
import {IKitAutoComplete} from '@kit/DataEntry/AutoComplete/types';

export interface IKitSideMenu extends KitHTMLAttributes<HTMLDivElement> {
    open?: boolean;
    showSearch?: boolean;
    autoCompleteOptions?: IKitAutoComplete;
    items?: IKitSideMenuItemProps[];
    customContent?: (open: boolean) => ReactNode;
    onMenuClick?: (key: string) => void;
    onOpenChanged?: (open: boolean) => void;
    defaultActiveItemKey?: string;
    disabledSecureClick?: boolean;
}

export interface IKitSideMenuItemProps extends KitHTMLAttributes<HTMLDivElement> {
    key?: string;
    type?: 'default' | 'separator';
    title?: ReactNode;
    complement?: ReactNode;
    icon?: ReactNode;
    disabled?: boolean;
    onClick?: (key: string) => void;
    // items?: IKitSideMenuItemProps[]; // En prevision de la mise en place des sous menus (non implémenté)
    disabledSecureClick?: boolean;
    className?: string;
}

export interface IKitSideMenuItemComponent extends Omit<IKitSideMenuItemProps, 'key'> {
    itemKey: string;
    large: boolean;
    active?: boolean;
}
