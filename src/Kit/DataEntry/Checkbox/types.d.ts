import React, {ReactNode, CSSProperties} from 'react';
import {CheckboxProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import type {CheckboxChangeEvent} from 'antd/lib/checkbox/Checkbox';

export interface IKitCheckbox extends CheckboxProps, KitHTMLAttributes<HTMLLabelElement> {
    danger?: boolean;
}

type CheckboxValueType = string | number | boolean;

export interface CheckboxOptionType {
    label: ReactNode;
    value: CheckboxValueType;
    style?: CSSProperties;
    disabled?: boolean;
    danger?: boolean;
    onChange?: (e: CheckboxChangeEvent) => void;
}

interface AbstractCheckboxGroup {
    prefixCls?: string;
    className?: string;
    rootClassName?: string;
    options?: Array<CheckboxOptionType | string | number>;
    disabled?: boolean;
    danger?: boolean;
    style?: CSSProperties;
}

export interface ICheckboxGroup extends AbstractCheckboxGroup {
    name?: string;
    defaultValue?: Array<CheckboxValueType>;
    value?: Array<CheckboxValueType>;
    onChange?: (checkedValue: Array<CheckboxValueType>) => void;
    children?: ReactNode;
}

export interface ICheckboxGroupContext {
    name?: string;
    toggleOption?: (option: CheckboxOptionType) => void;
    value?: any;
    disabled?: boolean;
    registerValue: (val: string) => void;
    cancelValue: (val: string) => void;
}
