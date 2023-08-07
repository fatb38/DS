import {SelectProp} from 'antd';
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
    | 'status'
    | 'tokenSeparators'
    | 'virtual'
    | 'onSearch'
    | 'clearIcon'
    | 'onDeselect'
    | 'onInputKeyDown'
    | 'dropdownStyle'
    | 'menuItemSelectedIcon';

export interface KitSelectProps extends Omit<SelectProp, AntdSelectTypesToOmit>, HTMLAttributes<HTMLDivElement> {
    danger?: boolean | null;
    header?: boolean;
    options?: KitOptionProps[];
    labelOnly?: boolean | null;
}

export interface KitOptionProps extends OptionProps {
    icon?: ReactNode;
    color?: string;
    children?: React.ReactNode;
}

export interface KitSelectTheme {
    borderRadius: string;
    dropdownBgColor: string;
    fontFamily: string;
    fontWeight: string | number;
    selectionFontWeight: string | number;
    selectionColor: string;
    selectedItemColor: string;
    selectedOptionBg: string;
    itemsColor: string;
    groupsColor: string;
    groupsFontWeight: string | number;
    disabledBgColor: string;
    disabledColor: string;
    highlightColor: string;
    optionHeight: number;
}

export interface KitTagTheme {
    fontSize: string | number;
    fontFamily: string;
    fontWeight: string | number;
    lineHeight: string | number;
    height: string | number;
    backgroundColor: string;
    color: string;
    borderRadius: string;
}
