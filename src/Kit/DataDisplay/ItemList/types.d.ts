import {KitHTMLAttributes} from '../../../types';
import {ReactNode} from 'react';
import {CheckboxChangeEvent} from 'antd/es/checkbox';

export interface IKitItemList extends KitHTMLAttributes<HTMLDivElement> {
    title?: string;
    description?: string;
    picture?: ReactNode;
    onSelect?: (e: CheckboxChangeEvent) => void;
    tagNumber?: number;
    onRafterClick?: () => void;
    disabled?: boolean;
    onClick?: () => void;
    selected?: boolean;
    disableSecureClick?: boolean;
}

export interface IStyledKitItemList {
    $gridTemplateColumns: string;
}
