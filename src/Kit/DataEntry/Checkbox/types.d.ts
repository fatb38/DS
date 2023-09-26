import {CheckboxProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';

export interface KitCheckboxProps extends CheckboxProps, KitHTMLAttributes<HTMLLabelElement> {
    danger?: boolean;
}
