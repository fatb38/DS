import {HTMLAttributes, ReactNode} from 'react';
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
export interface KitModalProps
    extends Omit<ReactModal.Props, propsToOmit>,
        Omit<KitHTMLAttributes<HTMLDivElement>, 'title' | 'role' | 'className' | 'style'> {
    width?: string;
    showCloseIcon?: boolean;
    close?: (args: any[]) => void;
    title?: ReactNode;
    footer?: ReactNode;
}

export interface confirmDialogProps extends KitModalProps {
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

export type ConfigUpdate = confirmDialogProps | ((prevConfig: confirmDialogProps) => confirmDialogProps);

export type ModalFunc = (props: confirmDialogProps) => {
    destroy: () => void;
    update: (configUpdate: ConfigUpdate) => void;
};
