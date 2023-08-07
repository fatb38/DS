import {HTMLAttributes, ReactNode} from 'react';
import type ReactModal from 'react-modal';

type propsToOmit =
    | 'bodyOpenClassName'
    | 'htmlOpenClassName'
    | 'closeTimeoutMS'
    | 'overlayRef'
    | 'contentRef'
    | 'overlayElement'
    | 'contentElement';

export interface KitModalProps extends Omit<ReactModal.Props, propsToOmit>, HTMLAttributes<HTMLDivElement> {
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

export interface modalThemeProps {
    backgroundColor: string;
    fontFamily: string;
    fontSize: {
        title: number;
        content: number;
    };
    fontWeight: {
        title: number | string;
        content: number | string;
    };
    itemsVerticalSpacing: 24;
    textVerticalSpacing: 8;
    icon: {
        successColor: string;
        successBgColor: string;
        errorColor: string;
        errorBgColor: string;
        warngingColor: string;
        warngingBgColor: string;
    };
    borderRadius: number;
    imageBorderColor: string;
    overlayColor: string;
    boxShadow: string;
}
