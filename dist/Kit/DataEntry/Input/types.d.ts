import {InputProps} from 'antd';
import {PasswordProps, TextAreaProps} from 'antd/es/input';
import {KitHTMLAttributes} from '../../../types';

type AntdInputTypesToOmit = 'styles' | 'type' | 'bordered' | 'size' | 'addonBefore' | 'addonAfter';

export interface KitInputProps
    extends Omit<InputProps, AntdInputTypesToOmit>,
        KitHTMLAttributes<HTMLSpanElement | HTMLInputElement> {
    label?: string;
    helper?: string;
    allowClear?: boolean;
}

export interface KitTextAreaProps
    extends Omit<TextAreaProps, AntdInputTypesToOmit>,
        KitHTMLAttributes<HTMLSpanElement | HTMLInputElement> {
    label?: string;
    helper?: string;
    allowClear?: boolean;
}

export interface KitPasswordProps
    extends Omit<PasswordProps, AntdInputTypesToOmit>,
        KitHTMLAttributes<HTMLSpanElement | HTMLInputElement> {
    label?: string;
    helper?: string;
    allowClear?: boolean;
}

export interface KitInputWrapperProps extends KitHTMLAttributes<HTMLDivElement> {
    label?: string;
    helper?: string;
    disabled?: boolean;
    status?: '' | 'warning' | 'error';
}
