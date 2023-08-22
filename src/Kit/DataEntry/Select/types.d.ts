import {SelectProps} from 'antd';
import {BaseOptionType, DefaultOptionType} from 'antd/es/select';
import type {OptionProps} from 'rc-select/lib/Option';
import {HTMLAttributes} from 'react';

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
        HTMLAttributes<HTMLDivElement> {
    label?: string;
    helper?: string;
    allowClear?: boolean;
    options?: KitOptionProps[];
    labelOnly?: boolean | null;
}

export interface KitOptionProps extends OptionProps {
    icon?: ReactNode;
    color?: string;
    label?: string;
    children?: React.ReactNode;
}
