import { ConfigUpdate, IKitConfirmDialog } from './types';
export default function confirm(config: IKitConfirmDialog): {
    destroy: (...args: any) => void;
    update: (configUpdate: ConfigUpdate) => void;
};
export declare function withWarn(props: IKitConfirmDialog): IKitConfirmDialog;
export declare function withInfo(props: IKitConfirmDialog): IKitConfirmDialog;
export declare function withSuccess(props: IKitConfirmDialog): IKitConfirmDialog;
export declare function withError(props: IKitConfirmDialog): IKitConfirmDialog;
export declare function withConfirm(props: IKitConfirmDialog): IKitConfirmDialog;
