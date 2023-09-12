import {BadgeProps, UploadProps} from 'antd';
import { DraggerProps } from 'antd/lib/upload';

type AntdUploadTypesToOmit = 'listType' | 'itemRender' | 'openFileDialogOnClick';

export type KitUploadListType = 'text' | 'picture' | 'picture-card';

export interface KitUploadProps extends Omit<UploadProps, AntdUploadTypesToOmit> {
    listType?: KitUploadListType;
    loading?: boolean;
    imageUrl?: string;
    buttonWording?: string
}

type AntdDraggerTypesToOmit = 'listType' | 'itemRender' | 'openFileDialogOnClick';

export interface KitDraggerProps extends Omit<DraggerProps, AntdDraggerTypesToOmit> {
    title?: string;
    description?: string;
}
