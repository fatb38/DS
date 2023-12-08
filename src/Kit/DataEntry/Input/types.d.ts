import {InputProps} from 'antd';
import {PasswordProps, TextAreaProps} from 'antd/lib/input';
import {KitHTMLAttributes} from '../../../types';

type AntdInputTypesToOmit = 'styles' | 'type' | 'bordered' | 'size' | 'addonBefore' | 'addonAfter';

export interface IKitInput
    extends Omit<InputProps, AntdInputTypesToOmit>,
        KitHTMLAttributes<HTMLSpanElement | HTMLInputElement> {
    label?: string;
    helper?: string;
    allowClear?: boolean;
    wrapperClassName?: string;
}

export interface IKitTextArea
    extends Omit<TextAreaProps, AntdInputTypesToOmit>,
        KitHTMLAttributes<HTMLSpanElement | HTMLInputElement> {
    label?: string;
    helper?: string;
    allowClear?: boolean;
    wrapperClassName?: string;
}

export interface IKitPassword
    extends Omit<PasswordProps, AntdInputTypesToOmit>,
        KitHTMLAttributes<HTMLSpanElement | HTMLInputElement> {
    label?: string;
    helper?: string;
    allowClear?: boolean;
    wrapperClassName?: string;
}

export interface IKitInputWrapper extends KitHTMLAttributes<HTMLDivElement> {
    label?: string;
    helper?: string;
    disabled?: boolean;
    status?: '' | 'warning' | 'error';
    className?: string;
}
