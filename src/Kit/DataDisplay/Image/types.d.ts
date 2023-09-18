import type {ImageProps} from 'antd';
import {ReactElement} from 'react';
import {KitHTMLAttributes} from '../../../types';

export interface KitImageProps extends ImageProps, KitHTMLAttributes<HTMLDivElement> {
    rounded?: boolean;
    bordered?: boolean;
    PreviewGroup?: ReactElement;
}

export interface themeProps {
    borderRadius: number;
    borderColor: string;
}
