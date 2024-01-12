import {CollapseProps} from 'antd';
import {ReactNode, MouseEvent, ReactInstance, KeyboardEvent, FunctionComponent} from 'react';
import {KitHTMLAttributes} from '../../../types';
import {SwitchChangeEventHandler} from 'antd/lib/switch';

type AntdCollapseTypesToOmit = 'bordered' | 'expandIconPosition' | 'ghost';

export interface IKitCollapse extends Omit<CollapseProps, AntdCollapseTypesToOmit>, KitHTMLAttributes<HTMLDivElement> {}

export interface IKitHeader {
    imageSrc?: string;
    title?: string;
    description?: string;
    tagContent?: ReactNode;
    onSwitchChange?: SwitchChangeEventHandler;
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
    actions?: IKitHeaderExtraActions;
}

export type KitCollapseCompoundedComponent = FunctionComponent<IKitCollapse> & {
    Header: FunctionComponent<IKitHeader>;
    HeaderExtra: FunctionComponent<IKitHeaderExtra>;
};
