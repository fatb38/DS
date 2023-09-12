/// <reference types="react" />
import { KitDraggerProps, KitUploadProps } from './types';
type UploadCompoundedComponent = React.FunctionComponent<KitUploadProps> & {
    KitDragger: React.FunctionComponent<KitDraggerProps>;
    LIST_IGNORE: String;
};
export declare const KitUpload: UploadCompoundedComponent;
export {};
