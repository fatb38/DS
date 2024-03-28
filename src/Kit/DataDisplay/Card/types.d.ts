import {CSSProperties} from 'react';
import {IKitTagConfig} from '@kit/DataDisplay/Tag/types';
import {CheckboxChangeEvent} from 'antd/es/checkbox';
import {SwitchChangeEventHandler} from 'antd/es/switch';
import {IKitActionButton} from '@kit/DataDisplay/types';

export interface IKitCard {
    title: string;
    actions?: IKitActionButton[];
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

export interface IStyledKitCard {
    $brandingBar: boolean;
}
