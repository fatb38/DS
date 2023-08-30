import {Upload as AntdUpload} from 'antd';
import InternalUpload from './Upload';
import InternalDragger from './Dragger';
import {KitDraggerProps, KitUploadProps} from './types';

type UploadCompoundedComponent = React.FunctionComponent<KitUploadProps> & {
    KitDragger: React.FunctionComponent<KitDraggerProps>;
    LIST_IGNORE: String;
};

export const KitUpload = InternalUpload as unknown as UploadCompoundedComponent;
KitUpload.displayName = 'KitUpload';
KitUpload.KitDragger = InternalDragger;
KitUpload.LIST_IGNORE = AntdUpload.LIST_IGNORE;
