import {SelectProps} from 'antd';
import {BaseOptionType, DefaultOptionType} from 'antd/lib/select';
import type {OptionProps} from 'rc-select/lib/Option';
import {KitHTMLAttributes} from '../../../types';
import {ReactNode} from 'react';

export type AntdSelectTypesToOmit =
    | 'dropdownMatchSelectWidth'
    | 'options'
    | 'bordered'
    | 'fieldNames'
    | 'filterOption'
    | 'filterSort'
    | 'labelInValue'
    | 'maxTagCount'
    | 'maxTagPlaceholder'
    | 'maxTagTextLength'
    | 'notFoundContent'
    | 'optionFilterProp'
    | 'optionLabelProp'
    | 'removeIcon'
    | 'searchValue'
    | 'showSearch'
    | 'size'
    | 'tokenSeparators'
    | 'virtual'
    | 'clearIcon'
    | 'onDeselect'
    | 'onInputKeyDown'
    | 'dropdownStyle'
    | 'menuItemSelectedIcon';

export interface KitSelectProps
    extends Omit<SelectProps<any, DefaultOptionType | BaseOptionType>, AntdSelectTypesToOmit>,
        KitHTMLAttributes<HTMLDivElement> {
    label?: string;
    helper?: string;
    allowClear?: boolean;
    oneLineTags?: boolean;
    options?: KitOptionProps[];
    labelOnly?: boolean | null;
}

export interface KitOptionProps extends Omit<OptionProps, 'children'> {
    icon?: ReactNode;
    color?: string;
    label?: string;
    children?: ReactNode;
}
