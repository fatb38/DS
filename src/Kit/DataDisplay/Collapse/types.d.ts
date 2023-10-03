import {CollapseProps} from 'antd';
import {ReactNode, MouseEvent} from 'react';
import {KitHTMLAttributes} from '../../../types';
import {CheckboxChangeEvent} from 'antd/lib/checkbox';

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

export interface IKitMenuInfo {
    key: string;
    keyPath: string[];
    /** @deprecated This will not support in future. You should avoid to use this */
    item: React.ReactInstance;
    domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}

interface KitHeaderExtraAction {
    icon: ReactNode;
    label: string;
    onClick?: (e: MouseEvent<HTMLElement> | IKitMenuInfo) => void;
}

export interface KitHeaderExtraActions extends Array<KitHeaderExtraAction> {}

export interface KitHeaderExtraProps {
    onSelectChange?: (e: CheckboxChangeEvent) => void;
    actions?: KitHeaderExtraActions;
}
