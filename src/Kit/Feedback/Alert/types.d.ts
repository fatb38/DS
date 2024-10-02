import {FunctionComponent, ReactNode} from 'react';
import {AlertProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import type {ToastPosition} from 'react-hot-toast';

type AntdAlertTypesToOmit = 'closeText' | 'closeIcon' | 'action' | 'icon' | 'banner';

export interface IKitAlert
    extends Omit<AlertProps, AntdAlertTypesToOmit>,
        Omit<KitHTMLAttributes<HTMLDivElement>, 'role'> {
    details?: ReactNode;
    customContent?: ReactNode;
}

export type ToastedAlertProps = IKitAlert & {
    duration?: number;
    position?: ToastPosition;
    toastId?: string;
};

export type Alertfunc = (props: ToastedAlertProps) => string;

export type KitAlertCompoundedComponent = FunctionComponent<IKitAlert> & {
    info: Alertfunc;
    success: Alertfunc;
    error: Alertfunc;
    warning: Alertfunc;
    confirm: Alertfunc;
};
