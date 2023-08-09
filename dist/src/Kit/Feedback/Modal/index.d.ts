/// <reference types="react" />
import type { ModalFunc, KitModalProps } from './types';
type CompoundedComponent = React.FunctionComponent<KitModalProps> & {
    info: ModalFunc;
    success: ModalFunc;
    error: ModalFunc;
    warning: ModalFunc;
    confirm: ModalFunc;
};
export declare const KitModal: CompoundedComponent;
export {};
