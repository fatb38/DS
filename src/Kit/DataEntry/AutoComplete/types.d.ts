import {AutoCompleteProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {ReactNode} from 'react';

export interface IKitAutoComplete extends AutoCompleteProps<T, E>, KitHTMLAttributes<HTMLInputElement> {
    label?: string;
    helper?: string;
    allowClear?: boolean;
    placeholder?: string;
    wrapperClassName?: string;
    required?: boolean;
    infoIcon?: ReactNode;
    actions?: ReactElement[];
    onInfoClick?: (e: MouseEvent<HTMLElement, MouseEvent>) => void;
}
