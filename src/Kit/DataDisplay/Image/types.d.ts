import type {ImageProps} from 'antd';
import {ReactElement} from 'react';
import {KitHTMLAttributes} from '../../../types';

export interface IKitImage extends ImageProps, KitHTMLAttributes<HTMLDivElement> {
    rounded?: boolean;
    bordered?: boolean;
    PreviewGroup?: ReactElement;
}
