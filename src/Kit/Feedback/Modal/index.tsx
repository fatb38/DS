import Modal from './Modal';
import type {IKitConfirmDialog, KitModalCompoundedComponent} from './types';
import confirm, {withWarn, withError, withInfo, withSuccess, withConfirm} from './confirm';

export const KitModal = Modal as KitModalCompoundedComponent;
KitModal.displayName = 'KitModal';

KitModal.info = function infoFn(props: IKitConfirmDialog) {
    return confirm(withInfo(props));
};

KitModal.success = function successFn(props: IKitConfirmDialog) {
    return confirm(withSuccess(props));
};

KitModal.error = function errorFn(props: IKitConfirmDialog) {
    return confirm(withError(props));
};

KitModal.warning = function warningFn(props: IKitConfirmDialog) {
    return confirm(withWarn(props));
};

KitModal.confirm = function confirmFn(props: IKitConfirmDialog) {
    return confirm(withConfirm(props));
};
