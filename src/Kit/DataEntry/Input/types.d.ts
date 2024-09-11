import {InputProps} from 'antd';
import {PasswordProps, TextAreaProps} from 'antd/es/input';
import {KitHTMLAttributes} from '../../../types';
import {ReactNode, ReactElement, MouseEvent} from 'react';

type AntdInputTypesToOmit = 'styles' | 'bordered' | 'size' | 'addonBefore' | 'addonAfter';

export interface IKitInput
    extends Omit<InputProps, AntdInputTypesToOmit>,
        KitHTMLAttributes<HTMLSpanElement | HTMLInputElement> {
    label?: string;
    helper?: string;
    htmlFor?: string;
    allowClear?: boolean;
    wrapperClassName?: string;
    required?: boolean;
    infoIcon?: ReactNode;
    actions?: ReactElement[];
    onInfoClick?: (e: MouseEvent<HTMLElement, MouseEvent>) => void;
    readonly?: boolean;
}

export interface IKitTextArea
    extends Omit<TextAreaProps, AntdInputTypesToOmit>,
        KitHTMLAttributes<HTMLSpanElement | HTMLInputElement> {
    label?: string;
    helper?: string;
    htmlFor?: string;
    allowClear?: boolean;
    wrapperClassName?: string;
    required?: boolean;
    infoIcon?: ReactNode;
    actions?: ReactElement[];
    onInfoClick?: (e: MouseEvent<HTMLElement, MouseEvent>) => void;
    readonly?: boolean;
}

export interface IKitPassword
    extends Omit<PasswordProps, AntdInputTypesToOmit>,
        KitHTMLAttributes<HTMLSpanElement | HTMLInputElement> {
    label?: string;
    helper?: string;
    htmlFor?: string;
    allowClear?: boolean;
    wrapperClassName?: string;
    required?: boolean;
    infoIcon?: ReactNode;
    actions?: ReactElement[];
    onInfoClick?: (e: MouseEvent<HTMLElement, MouseEvent>) => void;
}
