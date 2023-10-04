import {CollapseProps} from 'antd';
import {ReactNode, MouseEvent, ReactInstance, KeyboardEvent} from 'react';
import {KitHTMLAttributes} from '../../../types';
import {CheckboxChangeEvent} from 'antd/lib/checkbox';
import {IKitCollapseTheme} from '@theme/types/components/DataDisplay/Collapse';

type AntdCollapseTypesToOmit = 'bordered' | 'expandIconPosition' | 'ghost';

export interface IKitCollapse extends Omit<CollapseProps, AntdCollapseTypesToOmit>, KitHTMLAttributes<HTMLDivElement> {}

export interface IKitHeader {
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
    item: ReactInstance;
    domEvent: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>;
}

interface IKitHeaderExtraAction {
    icon: ReactNode;
    label: string;
    onClick?: (e: MouseEvent<HTMLElement> | IKitMenuInfo) => void;
}

export interface IKitHeaderExtraActions extends Array<IKitHeaderExtraAction> {}

export interface IKitHeaderExtra {
    onSelectChange?: (e: CheckboxChangeEvent) => void;
    actions?: IKitHeaderExtraActions;
}

export interface IStyledKitCollapse {
    $theme: IKitCollapseTheme;
}
