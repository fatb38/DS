import {KitHTMLAttributes} from '../../../types';
import {ReactNode} from 'react';
import {CheckboxChangeEvent} from 'antd/lib/checkbox';
import {IKitItemListTheme} from '@theme/types/components/DataDisplay/ItemList';

export interface IKitItemList extends KitHTMLAttributes<HTMLDivElement> {
    title?: string;
    description?: string;
    picture?: ReactNode;
    onSelectChange?: (e: CheckboxChangeEvent) => void;
    tagNumber?: number;
    onRafterClick?: Function;
    disabled?: boolean;
    onClick?: Function;
}

export interface IStyledKitItemList {
    $theme: IKitItemListTheme;
    $gridTemplateColumns: string;
}
