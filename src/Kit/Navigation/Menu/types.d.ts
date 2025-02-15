import {IKitInput} from '../../DataEntry/Input/types';
import {ReactElement, ReactNode, MouseEvent} from 'react';
import {KitHTMLAttributes} from '../../../types';
import {CheckboxChangeEvent} from 'antd/es/checkbox';
import {IKitButton} from '@kit/General/Button/types';

export interface IKitMenu extends KitHTMLAttributes<HTMLDivElement> {
    title?: string;
    segmentedButton?: ReactElement<IKitButton>;
    primaryInput?: ReactElement<IKitInput>;
    secondaryInput?: ReactElement<IKitInput>;
    onCloseClick?: (e: MouseEvent<HTMLElement>) => void;
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
    onRafterClick?: (e: MouseEvent<HTMLElement>) => void;
    isSelected?: boolean;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    disabledSecureClick?: boolean;
}

export interface IStyledIemMenu {
    $isClickable: boolean;
    $isSelected: boolean;
    $type: KitItemMenuType;
}
