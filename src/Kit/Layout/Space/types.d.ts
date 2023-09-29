import type {SpaceProps} from 'antd';
import type {SpaceSize} from 'antd/lib/space';
import {CSSProperties, ReactNode} from 'react';
import {KitHTMLAttributes} from '../../../types';
import {KitSpacing} from '@theme/types/general/spacing';

type KitSpaceSize = keyof KitSpacing | number;

export interface KitSpaceProps extends SpaceProps, KitHTMLAttributes<HTMLDivElement> {
    displayName?: string;
    children?: ReactNode;
    direction?: 'horizontal' | 'vertical';
    align?: 'start' | 'end' | 'center' | 'baseline';
    style?: CSSProperties;
    className?: string;
    size?: KitSpaceSize | [KitSpaceSize, KitSpaceSize];
}
