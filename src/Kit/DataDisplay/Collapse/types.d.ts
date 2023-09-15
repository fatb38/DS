import {CollapseProps} from 'antd';
import {MouseEventHandler, ReactNode} from 'react';
import {KitHTMLAttributes} from '../../../types';
import {CheckboxChangeEvent} from 'antd/es/checkbox';
import {MenuInfo} from '../../';

type AntdCollapseTypesToOmit = 'bordered' | 'expandIconPosition' | 'ghost';

export interface KitCollapseProps
    extends Omit<CollapseProps, AntdCollapseTypesToOmit>,
        KitHTMLAttributes<HTMLDivElement> {}

export interface KitHeaderProps {
    icon?: ReactNode;
    imageSrc?: string;
    title?: string;
    description?: string;
    tagContent?: ReactNode;
}

interface KitHeaderExtraAction {
    icon: ReactNode;
    label: string;
    onClick?: (e: MouseEvent<HTMLElement, MouseEvent> | MenuInfo) => void;
}

export interface KitHeaderExtraActions extends Array<KitHeaderExtraAction> {}

export interface KitHeaderExtraProps {
    onSelectChange?: (e: CheckboxChangeEvent) => void;
    actions?: KitHeaderExtraActions;
}
