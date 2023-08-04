import type IconBaseComponent from "@ant-design/icons/lib/components/AntdIcon";
import { HTMLAttributes, ReactNode } from "react";

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

export interface KitIconProps
    extends IconBaseComponent,
        HTMLAttributes<HTMLSpanElement> {
    on?: boolean;
    hoverable?: boolean;
    color?: string;
    rev?: any;
    displayName?: string;
    icon: ReactNode;
    className?: string;
    onClick?: MouseEventHandler<HTMLSpanElement> | undefined;
}

export interface StyledKitIconProps extends KitIconProps {
    $on?: boolean;
    $hoverable?: boolean;
}
