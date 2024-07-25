import {CSSProperties, ReactNode} from 'react';
import {IKitTagGroup} from '@kit/DataDisplay/Tag/types';
import {CheckboxChangeEvent} from 'antd/es/checkbox';
import {SwitchChangeEventHandler} from 'antd/es/switch';
import {IKitBreadcrumbItem} from '@kit/Navigation/Breadcrumb/types';
import {IKitActionButton} from '@kit/DataDisplay/types';

export type IKitItemCard = {
    title: string;
    className?: string;
    style?: CSSProperties;
    disabled?: boolean;
    display?: 'card' | 'list';
    imageAlt?: string;
    imageSrc?: string;
    icon?: ReactNode;
    description?: string;
    tagGroup?: IKitTagGroup;
    breadcrumbItems?: IKitBreadcrumbItem[];
    draggableHandler?: ReactNode;
    selected?: boolean;
    onSelect?: (e: CheckboxChangeEvent) => void;
    activateLabel?: string;
    activated?: boolean;
    onActivate?: SwitchChangeEventHandler;
    extra?: ReactNode;
    actions?:
        | [IKitActionButton]
        | [IKitActionButton, IKitActionButton]
        | [IKitActionButton, IKitActionButton, IKitActionButton];
};

export type IKitItemCardActions = {
    display: IKitItemCard['display'];
    disabled: IKitItemCard['disabled'];
    actions: IKitItemCard['actions'];
};
