import {InputProps} from 'antd';
import {PasswordProps, TextAreaProps} from 'antd/lib/input';
import {KitHTMLAttributes} from '../../../types';
import {IKitInputTheme} from '@theme/types/components/DataEntry/Input';

type AntdInputTypesToOmit = 'styles' | 'type' | 'bordered' | 'size' | 'addonBefore' | 'addonAfter' | 'visibilityToggle';

export interface IKitInput
    extends Omit<InputProps, AntdInputTypesToOmit>,
        KitHTMLAttributes<HTMLSpanElement | HTMLInputElement> {
    label?: string;
    helper?: string;
    allowClear?: boolean;
}

export interface IKitTextArea
    extends Omit<TextAreaProps, AntdInputTypesToOmit>,
        KitHTMLAttributes<HTMLSpanElement | HTMLInputElement> {
    label?: string;
    helper?: string;
    allowClear?: boolean;
}

export interface IKitPassword
    extends Omit<PasswordProps, AntdInputTypesToOmit>,
        KitHTMLAttributes<HTMLSpanElement | HTMLInputElement> {
    label?: string;
    helper?: string;
    allowClear?: boolean;
}

export interface IKitInputWrapper extends KitHTMLAttributes<HTMLDivElement> {
    label?: string;
    helper?: string;
    disabled?: boolean;
    status?: '' | 'warning' | 'error';
}

export interface IStyledAntdInput {
    $theme: IKitInputTheme;
}

export interface IStyledAntdPassword {
    $theme: IKitInputTheme['Password'];
}

export interface IStyledAntdTextArea {
    $theme: IKitInputTheme['TextArea'];
}
