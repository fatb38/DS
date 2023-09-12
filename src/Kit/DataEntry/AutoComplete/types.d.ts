import type {AutoCompleteProps} from 'antd';

export interface KitAutoCompleteProps extends AutoCompleteProps, HTMLAttributes<HTMLInputElement> {
    label?: string;
    helper?: string;
    allowClear?: boolean;
    placeholder?: string;
}
