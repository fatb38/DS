import { IKitInput, IKitPassword, IKitTextArea } from './types';
import { FunctionComponent } from 'react';
type CompoundedComponent = FunctionComponent<IKitInput> & {
    TextArea: FunctionComponent<IKitTextArea>;
    Password: FunctionComponent<IKitPassword>;
};
export declare const KitInput: CompoundedComponent;
export {};
