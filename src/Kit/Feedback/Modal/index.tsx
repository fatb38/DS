import Modal from "./Modal";
import type { ModalFunc, KitModalProps, confirmDialogProps } from "./types";
import confirm, {
    withWarn,
    withError,
    withInfo,
    withSuccess,
    withConfirm,
} from "./confirm";

type CompoundedComponent = React.FunctionComponent<KitModalProps> & {
    info: ModalFunc;
    success: ModalFunc;
    error: ModalFunc;
    warning: ModalFunc;
    confirm: ModalFunc;
};

export const KitModal = (Modal as unknown) as CompoundedComponent;
KitModal.displayName = "KitModal";

KitModal.info = function infoFn(props: confirmDialogProps) {
    return confirm(withInfo(props));
};

KitModal.success = function successFn(props: confirmDialogProps) {
    return confirm(withSuccess(props));
};

KitModal.error = function errorFn(props: confirmDialogProps) {
    return confirm(withError(props));
};

KitModal.warning = function warningFn(props: confirmDialogProps) {
    return confirm(withWarn(props));
};

KitModal.confirm = function confirmFn(props: confirmDialogProps) {
    return confirm(withConfirm(props));
};
