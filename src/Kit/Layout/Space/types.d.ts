import type { SpaceProps } from 'antd';
import { CSSProperties, HTMLAttributes } from 'react';

export interface KitSpaceProps extends SpaceProps, HTMLAttributes<HTMLDivElement> {
    displayName?: string;
    children?: ReactNode;
    direction?: 'horizontal' | 'vertical';
    align?: 'start' | 'end' | 'center' | 'baseline';
    style?: CSSProperties;
    className?: string;
}
