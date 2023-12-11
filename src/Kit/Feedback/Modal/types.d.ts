import {FunctionComponent, ReactNode} from 'react';
import type ReactModal from 'react-modal';
import {KitHTMLAttributes} from '../../../types';

type propsToOmit =
    | 'bodyOpenClassName'
    | 'htmlOpenClassName'
    | 'closeTimeoutMS'
    | 'overlayRef'
    | 'contentRef'
    | 'overlayElement'
    | 'contentElement';

//todo delete Omit<title role className style>
export interface IKitModal
    extends Omit<ReactModal.Props, propsToOmit>,
        Omit<KitHTMLAttributes<HTMLDivElement>, 'title' | 'role' | 'className' | 'style'> {
    width?: string;
    showCloseIcon?: boolean;
    close?: (args: any[]) => void;
    title?: ReactNode;
    footer?: ReactNode;
}

export interface IKitConfirmDialog extends IKitModal {
    type: 'info' | 'success' | 'warning' | 'error' | 'warn' | 'confirm';
    image?: string;
    icon?: ReactNode;
    firstLine?: ReactNode;
    secondLine?: ReactNode;
    okCancel?: boolean;
    title?: string;
    cancelText?: string;
    close?: (...args: any[]) => void;
    okText?: string;
    onCancel?: () => {};
    onOk?: () => {};
}

export type ConfigUpdate = IKitConfirmDialog | ((prevConfig: IKitConfirmDialog) => IKitConfirmDialog);

type ModalFunc = (props: IKitConfirmDialog) => {
    destroy: () => void;
    update: (configUpdate: ConfigUpdate) => void;
};

export type KitModalCompoundedComponent = FunctionComponent<IKitModal> & {
    info: ModalFunc;
    success: ModalFunc;
    error: ModalFunc;
    warning: ModalFunc;
    confirm: ModalFunc;
};
