import {UploadProps} from 'antd';
import {DraggerProps} from 'antd/es/upload';

type AntdUploadTypesToOmit = 'listType' | 'itemRender' | 'openFileDialogOnClick';

export type KitUploadListType = 'text' | 'picture' | 'picture-card';

export interface IKitUpload extends Omit<UploadProps, AntdUploadTypesToOmit> {
    listType?: KitUploadListType;
    loading?: boolean;
    imageUrl?: string;
    buttonWording?: string;
}

type AntdDraggerTypesToOmit = 'listType' | 'itemRender' | 'openFileDialogOnClick';

export interface IKitDragger extends Omit<DraggerProps, AntdDraggerTypesToOmit> {
    title?: string;
    description?: string;
}

export interface IStyledUpload {
    $listType: string;
}
