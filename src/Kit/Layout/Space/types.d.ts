import type {SpaceProps} from 'antd';
import {CSSProperties, ReactNode} from 'react';
import {KitHTMLAttributes} from '../../../types';
import {IKitSpacing} from '@theme/types/general/spacing';

type KitSpaceSize = keyof IKitSpacing | number;

export interface IKitSpace extends SpaceProps, KitHTMLAttributes<HTMLDivElement> {
    displayName?: string;
    children?: ReactNode;
    direction?: 'horizontal' | 'vertical';
    align?: 'start' | 'end' | 'center' | 'baseline';
    style?: CSSProperties;
    className?: string;
    size?: KitSpaceSize | [KitSpaceSize, KitSpaceSize];
}
