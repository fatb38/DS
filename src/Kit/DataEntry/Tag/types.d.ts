import {TagProps} from 'antd';
import {HTMLAttributes} from 'react';

export const AntdTagPropsToOmit = 'color' | 'checkableTag' | 'icon';

export type KitTagColor = 'red' | 'green' | 'blue' | 'blueInvert' | 'default';

export interface KitTagProps extends Omit<TagProps, AntdTagPropsToOmit>, HTMLAttributes<HTMLSpanElement> {
    color?: KitTagColor;
    children?: ReactNode[] | ReactNode;
    closable?: TagProps['closable'];
    onClose?: TagProps['onClose'];
}

export interface KitTagTheme {
    fontSize: string | number;
    fontFamily: string;
    fontWeight: string | number;
    lineHeight: string | number;
    height: string | number;
    placeholderFontSize: string | number;
    placeholderFontWeight: string | number;
    placeholderColor: string;
}
export type AntdSelectTypesToOmit =
    | 'dropdownMatchSelectWidth'
    | 'bordered'
    | 'fieldNames'
    | 'filterOption'
    | 'filterSort'
    | 'labelInValue'
    | 'maxTagCount'
    | 'maxTagPlaceholder'
    | 'maxTagTextLength'
    | 'optionFilterProp'
    | 'optionLabelProp'
    | 'removeIcon'
    | 'searchValue'
    | 'showSearch'
    | 'size'
    | 'status'
    | 'tokenSeparators'
    | 'virtual'
    | 'clearIcon'
    | 'onDeselect'
    | 'onInputKeyDown'
    | 'dropdownStyle'
    | 'menuItemSelectedIcon';
