import {KitHTMLAttributes} from '../../../types';
import {ReactNode} from 'react';
import {CheckboxChangeEvent} from 'antd/es/checkbox';

export interface KitItemListProps extends KitHTMLAttributes<HTMLDivElement> {
    title?: string;
    description?: string;
    picture?: ReactNode;
    onSelectChange?: (e: CheckboxChangeEvent) => void;
    tagNumber?: number;
    onRafterClick?: Function;
    isDisabled?: boolean;
    onClick?: Function;
}
