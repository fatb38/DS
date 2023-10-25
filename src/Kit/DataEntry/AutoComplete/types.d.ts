import type {AutoCompleteProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';

export interface IKitAutoComplete extends AutoCompleteProps<T, E>, KitHTMLAttributes<HTMLInputElement> {
    label?: string;
    helper?: string;
    allowClear?: boolean;
    placeholder?: string;
}
