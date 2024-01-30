import {SelectProps} from 'antd';
import type {OptionProps} from 'rc-select/lib/Option';
import {KitHTMLAttributes} from '../../../types';
import {ReactNode} from 'react';

type AntdSelectTypesToOmit =
    | 'dropdownMatchSelectWidth'
    | 'options'
    | 'bordered'
    | 'fieldNames'
    | 'filterSort'
    | 'labelInValue'
    | 'maxTagCount'
    | 'maxTagPlaceholder'
    | 'maxTagTextLength'
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
    | 'menuItemSelectedIcon'
    | 'suffixIcon';

export interface IKitSelect extends Omit<SelectProps, AntdSelectTypesToOmit>, KitHTMLAttributes<HTMLDivElement> {
    label?: string;
    helper?: string;
    allowClear?: boolean;
    oneLineTags?: boolean;
    options?: IKitOption[];
    labelOnly?: boolean | null;
    wrapperClassName?: string;
}

interface IKitOption extends Omit<OptionProps, ''> {
    icon?: ReactNode;
    color?: string;
    label: string;
}
