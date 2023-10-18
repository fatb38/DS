import {ReactNode, MouseEvent} from 'react';
import {KitHTMLAttributes} from '../../../types';
import {IconComponentProps} from '@ant-design/icons/lib/components/Icon';
import {IKitIconTheme} from '@theme/types/components/General/Icon';

export interface IKitIcon extends IconComponentProps, KitHTMLAttributes<HTMLSpanElement> {
    on?: boolean;
    hoverable?: boolean;
    color?: string;
    rev?: any;
    displayName?: string;
    icon: ReactNode;
    className?: string;
    disableSecureClick?: boolean;
    onClick?: (e: MouseEvent<HTMLSpanElement>) => void;
}

export interface IStyledKitIcon extends Omit<IKitIcon, 'icon'> {
    $theme: IKitIconTheme;
    $on?: boolean;
    $hoverable?: boolean;
    $isClickable?: boolean;
    className?: string;
}
