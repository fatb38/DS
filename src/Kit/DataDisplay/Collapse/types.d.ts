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
    disabled?: boolean;
}

export interface IKitHeaderSwitch {
    onSwitchChange: NonNullable<IKitHeader['onSwitchChange']>;
    disabled: NonNullable<IKitHeader['disabled']>;
}

export interface IKitHeaderImage {
    imageSrc: NonNullable<IKitHeader['imageSrc']>;
}

export interface IKitHeaderContent {
    title: IKitHeader['title'];
    description: IKitHeader['description'];
    tagContent: IKitHeader['tagContent'];
    disabled: IKitHeader['disabled'];
}

export interface IKitMenuInfo {
    key: string;
    keyPath: string[];
    /** @deprecated This will not support in future. You should avoid to use this */
    item: ReactInstance;
    domEvent: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>;
}

interface IAction {
    icon: ReactNode;
    label: string;
    onClick?: (e: MouseEvent<HTMLElement> | IKitMenuInfo) => void;
}

interface IActions extends Array<IAction> {}

export interface IKitHeaderExtra {
    actions?: IActions;
    disabled?: boolean;
}

export interface IKitHeaderExtraActions {
    actions: NonNullable<IKitHeaderExtra['actions']>;
    disabled: NonNullable<IKitHeaderExtra['disabled']>;
}

export interface IKitHeaderExtraMoreActions {
    actions: NonNullable<IKitHeaderExtra['actions']>;
}

export type KitCollapseCompoundedComponent = FunctionComponent<IKitCollapse> & {
    Header: FunctionComponent<IKitHeader>;
    HeaderExtra: FunctionComponent<IKitHeaderExtra>;
};
