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
    // | 'status'
    | 'tokenSeparators'
    | 'virtual'
    // | 'onSearch'
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
    // onSearch?: (value: string, selectedValues: string[] | null) => void;
    // onSearch?: (value: string) => void;
    // onChange?: (value: string | string[]) => void;
}

export interface KitOptionProps extends OptionProps {
    icon?: ReactNode;
    color?: string;
    children?: React.ReactNode;
}
