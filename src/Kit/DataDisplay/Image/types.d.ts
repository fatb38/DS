import type {ImageProps} from 'antd';
import {ReactElement} from 'react';
import {KitHTMLAttributes} from '../../../types';
import {IKitImageTheme} from '@theme/types/components/DataDisplay/Image';
import {Image as AntdImage} from 'antd';

export interface IKitImage extends ImageProps, KitHTMLAttributes<HTMLDivElement> {
    rounded?: boolean;
    bordered?: boolean;
    PreviewGroup?: ReactElement;
}

export interface IStyledKitImage {
    $theme: IKitImageTheme;
    $rounded?: boolean;
    $bordered?: boolean;
}

export type KitImageCompoundedComponent = FunctionComponent<IKitImage> & {
    PreviewGroup: typeof AntdImage.PreviewGroup;
};
