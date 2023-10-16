import {SelectProps} from 'antd';
import {BaseOptionType, DefaultOptionType} from 'antd/lib/select';
import type {OptionProps} from 'rc-select/lib/Option';
import {KitHTMLAttributes} from '../../../types';
import {ReactNode} from 'react';
import {IKitSelectTheme} from '@theme/types/components/DataEntry/Select';

type AntdSelectTypesToOmit =
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

export interface IKitSelect
    extends Omit<SelectProps<any, DefaultOptionType | BaseOptionType>, AntdSelectTypesToOmit>,
        KitHTMLAttributes<HTMLDivElement> {
    label?: string;
    helper?: string;
    allowClear?: boolean;
    oneLineTags?: boolean;
    options?: IKitOption[];
    labelOnly?: boolean | null;
}

interface IKitOption extends Omit<OptionProps, 'children'> {
    icon?: ReactNode;
    color?: string;
    label?: string;
    children?: ReactNode;
}

export interface IStyledKitSelectColorBadge {
    $theme: IKitSelectTheme['ColorBadge'];
}

export interface IStyledKitSelectDropDown {
    $theme: IKitSelectTheme['DropDown'];
}

export interface IStyledKitSelect {
    $theme: IKitSelectTheme;
}
