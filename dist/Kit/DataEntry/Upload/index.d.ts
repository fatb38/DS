import { IKitDragger, IKitUpload } from './types';
import { FunctionComponent } from 'react';
type UploadCompoundedComponent = FunctionComponent<IKitUpload> & {
    KitDragger: FunctionComponent<IKitDragger>;
    LIST_IGNORE: string;
};
export declare const KitUpload: UploadCompoundedComponent;
export {};
