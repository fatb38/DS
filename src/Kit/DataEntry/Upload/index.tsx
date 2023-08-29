import {Upload as AntdUpload} from 'antd';
import InternalUpload from './Upload';
import InternalDragger from './Dragger';
import {DraggerProps} from 'antd/es/upload';
import {KitUploadProps} from './types';

type UploadCompoundedComponent = React.FunctionComponent<KitUploadProps> & {
    KitDragger: React.FunctionComponent<DraggerProps>;
    LIST_IGNORE: String;
};

export const KitUpload = InternalUpload as unknown as UploadCompoundedComponent;
KitUpload.displayName = 'KitUpload';
KitUpload.KitDragger = InternalDragger;
KitUpload.LIST_IGNORE = AntdUpload.LIST_IGNORE;
