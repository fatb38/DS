import {ReactNode, MouseEvent} from 'react';
import {KitHTMLAttributes} from '../../../types';
import {IconComponentProps} from '@ant-design/icons/lib/components/Icon';
import {IKitIconTheme} from '@theme/types/components/General/Icon';
import {KitColorProp} from '@utils/functions/types';

export interface IKitIcon extends IconComponentProps, KitHTMLAttributes<HTMLSpanElement> {
    on?: boolean;
    color?: KitColorProp;
    displayName?: string;
    icon: ReactNode;
    className?: string;
    disableSecureClick?: boolean;
    onClick?: (e: MouseEvent<HTMLSpanElement>) => void;
}

export interface IStyledKitIcon extends Omit<IKitIcon, 'icon'> {
    $theme: IKitIconTheme;
    $on?: boolean;
    $isClickable?: boolean;
    className?: string;
    $backgroundColor?: string | null;
    $iconColor?: string;
}
