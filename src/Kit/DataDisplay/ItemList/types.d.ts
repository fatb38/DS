import {KitHTMLAttributes} from '../../../types';
import {ReactNode} from 'react';
import {CheckboxChangeEvent} from 'antd/lib/checkbox';

export interface IKitItemList extends KitHTMLAttributes<HTMLDivElement> {
    title?: string;
    description?: string;
    picture?: ReactNode;
    onSelectChange?: (e: CheckboxChangeEvent) => void;
    tagNumber?: number;
    onRafterClick?: () => void;
    disabled?: boolean;
    onClick?: () => void;
    disableSecureClick?: boolean;
}

export interface IStyledKitItemList {
    $gridTemplateColumns: string;
}
