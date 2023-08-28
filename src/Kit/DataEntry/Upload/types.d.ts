import {BadgeProps, UploadProps} from 'antd';

type AntdUploadTypesToOmit = 'listType' | '';

export type KitUploadListType = 'text' | 'picture' | 'picture-card';

export interface KitUploadProps extends Omit<UploadProps, AntdUploadTypesToOmit> {
    listType?: KitUploadListType;
}
