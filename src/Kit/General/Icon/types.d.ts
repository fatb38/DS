import {ReactNode} from 'react';
import {KitHTMLAttributes} from '../../../types';
import {IconComponentProps} from '@ant-design/icons/lib/components/Icon';

export interface KitIconTheme {
    color: {
        on: string;
        default: string;
    };
    backgroundColor: {
        on: string;
        default: string;
    };
    borderRadius: {
        default: number;
        on: number;
    };
    width: number;
    padding: string;
}

export interface KitIconProps extends IconComponentProps, KitHTMLAttributes<HTMLSpanElement> {
    on?: boolean;
    hoverable?: boolean;
    color?: string;
    rev?: any;
    displayName?: string;
    icon: ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

export interface StyledKitIconProps extends KitIconProps {
    $on?: boolean;
    $hoverable?: boolean;
}
