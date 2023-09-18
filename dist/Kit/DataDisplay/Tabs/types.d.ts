import type {TabsProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';

export interface KitTabsProps extends TabsProps, KitHTMLAttributes<HTMLDivElement> {}

export interface KitTabsThemeProps {
    extra: {
        borderRadius: number;
        borderColor: string;
        padding: string;
        height: number;
        color: string;
        verticalMargin: number;
        horizontalMargin: number;
    };
}
