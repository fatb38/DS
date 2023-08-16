import type { TabsProps } from 'antd';
import { HTMLAttributes } from 'react';

export interface KitTabsProps extends TabsProps, HTMLAttributes<HTMLDivElement> { };

export interface KitTabsThemeProps {
    extra: {
        borderRadius: number;
        borderColor: string;
        padding: string;
        height: number;
        color: string;
        verticalMargin: number;
        horizontalMargin: number;
    }
}