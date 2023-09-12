import {InputProps} from 'antd';
import {PasswordProps, TextAreaProps} from 'antd/es/input';
import {HTMLAttributes} from 'react';

type AntdInputTypesToOmit = 'styles' | 'type' | 'bordered' | 'size' | 'addonBefore' | 'addonAfter';

export interface KitInputProps
    extends Omit<InputProps, AntdInputTypesToOmit>,
        HTMLAttributes<HTMLSpanElement | HTMLInputElement> {
    label?: string;
    helper?: string;
    allowClear?: boolean;
}

export interface KitTextAreaProps
    extends Omit<TextAreaProps, AntdInputTypesToOmit>,
        HTMLAttributes<HTMLSpanElement | HTMLInputElement> {
    label?: string;
    helper?: string;
    allowClear?: boolean;
}

export interface KitPasswordProps
    extends Omit<PasswordProps, AntdInputTypesToOmit>,
        HTMLAttributes<HTMLSpanElement | HTMLInputElement> {
    label?: string;
    helper?: string;
    allowClear?: boolean;
}

export interface KitInputWrapperProps extends HTMLAttributes<HTMLDivElement> {
    label?: string;
    helper?: string;
    disabled?: boolean;
    status?: '' | 'warning' | 'error';
}
