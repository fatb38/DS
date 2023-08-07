import { ConfigUpdate, confirmDialogProps } from "./types";
export default function confirm(config: confirmDialogProps): {
    destroy: (...args: any) => void;
    update: (configUpdate: ConfigUpdate) => void;
};
export declare function withWarn(props: confirmDialogProps): confirmDialogProps;
export declare function withInfo(props: confirmDialogProps): confirmDialogProps;
export declare function withSuccess(props: confirmDialogProps): confirmDialogProps;
export declare function withError(props: confirmDialogProps): confirmDialogProps;
export declare function withConfirm(props: confirmDialogProps): confirmDialogProps;
