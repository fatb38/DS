import {CollapseProps} from 'antd';
import {HTMLAttributes, ReactNode} from 'react';

type AntdCollapseTypesToOmit = 'bordered' | 'expandIconPosition' | 'ghost';

export interface KitCollapseProps
    extends Omit<CollapseProps, AntdCollapseTypesToOmit>,
        HTMLAttributes<HTMLDivElement> {}

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
    onClick: MenuClickEventHandler;
}

export interface KitHeaderExtraActions extends Array<KitHeaderExtraAction> {}

export interface KitHeaderExtraProps {
    onSelectChange?: (e: CheckboxChangeEvent) => void;
    actions?: KitHeaderExtraActions;
}
