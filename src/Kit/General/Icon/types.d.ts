import {ReactNode, MouseEvent} from 'react';
import {KitHTMLAttributes} from '../../../types';
import {IconComponentProps} from '@ant-design/icons/lib/components/Icon';
import {IKitIconTheme} from '@theme/types/components/General/Icon';

export interface IKitIcon extends IconComponentProps, KitHTMLAttributes<HTMLSpanElement> {
    on?: boolean;
    color?: string;
    displayName?: string;
    icon: ReactNode;
    className?: string;
    onClick?: (e: MouseEvent<HTMLSpanElement>) => void;
}

export interface IStyledKitIcon extends Omit<IKitIcon, 'icon'> {
    $theme: IKitIconTheme;
    $on?: boolean;
    $isClickable?: boolean;
    className?: string;
}
