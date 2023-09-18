import type {SpaceProps} from 'antd';
import type {SpaceSize} from 'antd/es/space';
import {CSSProperties, ReactNode} from 'react';
import {KitHTMLAttributes} from '../../../types';

export interface KitSpaceProps extends SpaceProps, KitHTMLAttributes<HTMLDivElement> {
    displayName?: string;
    children?: ReactNode;
    direction?: 'horizontal' | 'vertical';
    align?: 'start' | 'end' | 'center' | 'baseline';
    style?: CSSProperties;
    className?: string;
}

export {SpaceSize};
