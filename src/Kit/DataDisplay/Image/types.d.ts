import type {ImageProps} from 'antd';
import {FunctionComponent, ReactElement} from 'react';
import {KitHTMLAttributes} from '../../../types';
import {Image as AntdImage} from 'antd';

export interface IKitImage extends ImageProps, KitHTMLAttributes<HTMLDivElement> {
    rounded?: boolean;
    bordered?: boolean;
    PreviewGroup?: ReactElement;
}

export interface IStyledKitImage {
    $rounded?: boolean;
    $bordered?: boolean;
}

export type KitImageCompoundedComponent = FunctionComponent<IKitImage> & {
    PreviewGroup: typeof AntdImage.PreviewGroup;
};
