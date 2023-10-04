import {IKitInput} from '../../DataEntry/Input/types';
import {IKitButtonProps} from '../../General/Button/types';
import {ReactElement, ReactNode, MouseEvent} from 'react';
import {KitHTMLAttributes} from '../../../types';
import {CheckboxChangeEvent} from 'antd/lib/checkbox';
import {MenuItemType} from 'antd/lib/menu/hooks/useItems';
import {IKitMenuTheme} from '@theme/types/components/Navigation/Menu';

export interface IKitMenu extends KitHTMLAttributes<HTMLDivElement> {
    title?: string;
    segmentedButton?: ReactElement<IKitButtonProps>;
    primaryInput?: ReactElement<IKitInput>;
    secondaryInput?: ReactElement<IKitInput>;
    onCloseClick?: Function;
}

export interface IKitMenuInfo {
    key: string;
    keyPath: string[];
    /** @deprecated This will not support in future. You should avoid to use this */
    item: React.ReactInstance;
    domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}

interface IKitItemMenuAction {
    icon: ReactNode;
    isActive?: boolean;
    label: string;
    onClick: (e: MouseEvent<HTMLElement> | IKitMenuInfo) => void;
}

export interface IKitItemMenuActions extends Array<IKitItemMenuAction> {}

export type KitItemMenuType = 'default' | 'cta' | 'ctaDanger';

export interface IKitItemMenu extends KitHTMLAttributes<HTMLDivElement> {
    type?: KitItemMenuType;
    title?: string;
    icon?: ReactNode;
    value?: string;
    actions?: IKitItemMenuActions;
    onSelectChange?: (e: CheckboxChangeEvent) => void;
    onRafterClick?: Function;
    isSelected?: boolean;
    onClick?: Function;
}

export interface IStyledIemMenu {
    $theme: IKitMenuTheme;
    $isClickable: boolean;
    $isSelected: boolean;
    $type: KitItemMenuType;
}
