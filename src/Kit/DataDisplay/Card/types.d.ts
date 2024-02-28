import {CSSProperties, ReactNode} from 'react';
import {IKitTagConfig} from '@kit/DataDisplay/Tag/types';
import {CheckboxChangeEvent} from 'antd/es/checkbox';
import {SwitchChangeEventHandler} from 'antd/es/switch';

export interface IKitCard {
    title: string;
    actions?: IKitCardAction[];
    activated?: boolean;
    brandingBar?: boolean;
    className?: string;
    description?: string;
    extra?: string;
    style?: CSSProperties;
    disabled?: boolean;
    previewSrc?: string;
    onActivate?: SwitchChangeEventHandler;
    onSelect?: (e: CheckboxChangeEvent) => void;
    selected?: boolean;
    tags?: IKitTagConfig[];
}

export interface IKitCardAction {
    key: string;
    label: string;
    icon: ReactNode;
    onClick: (e: unknown) => void;
}

export interface IStyledKitCard {
    $brandingBar: boolean;
}
