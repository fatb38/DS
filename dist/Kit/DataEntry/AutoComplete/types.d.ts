import type {AutoCompleteProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';

export interface KitAutoCompleteProps extends AutoCompleteProps, KitHTMLAttributes<HTMLInputElement> {
    label?: string;
    helper?: string;
    allowClear?: boolean;
    placeholder?: string;
}
