import {Upload as AntdUpload} from 'antd';
import InternalUpload from './Upload';
import InternalDragger from './Dragger';
import {IKitDragger, IKitUpload} from './types';
import {FunctionComponent} from 'react';

type UploadCompoundedComponent = FunctionComponent<IKitUpload> & {
    KitDragger: FunctionComponent<IKitDragger>;
    LIST_IGNORE: string;
};

export const KitUpload = InternalUpload as unknown as UploadCompoundedComponent;
KitUpload.displayName = 'KitUpload';
KitUpload.KitDragger = InternalDragger;
KitUpload.LIST_IGNORE = AntdUpload.LIST_IGNORE;
