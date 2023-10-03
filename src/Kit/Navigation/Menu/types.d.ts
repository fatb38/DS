import {KitInputProps} from '../../DataEntry/Input/types';
import {IKitButtonProps} from '../../General/Button/types';
import {ReactElement, ReactNode, MouseEvent} from 'react';
import {KitHTMLAttributes} from '../../../types';
import {CheckboxChangeEvent} from 'antd/lib/checkbox';

export interface KitMenuProps extends KitHTMLAttributes<HTMLDivElement> {
    title?: string;
    segmentedButton?: ReactElement<IKitButtonProps>;
    primaryInput?: ReactElement<KitInputProps>;
    secondaryInput?: ReactElement<KitInputProps>;
    onCloseClick?: Function;
}

interface KitItemMenuAction {
    icon: ReactNode;
    isActive?: boolean;
    label: string;
    onClick: (e: MouseEvent<HTMLElement>) => void;
}

export interface KitItemMenuActions extends Array<KitItemMenuAction> {}

export type KitItemMenuType = 'default' | 'cta' | 'ctaDanger';

export interface KitItemMenuProps extends KitHTMLAttributes<HTMLDivElement> {
    type?: KitItemMenuType;
    title?: string;
    icon?: ReactNode;
    value?: string;
    actions?: KitItemMenuActions;
    onSelectChange?: (e: CheckboxChangeEvent) => void;
    onRafterClick?: Function;
    isSelected?: boolean;
    onClick?: Function;
}
