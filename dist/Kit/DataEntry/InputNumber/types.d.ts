import {InputNumberProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';

type AntdInputNumberTypesToOmit = 'size' | 'addonBefore' | 'addonAfter' | 'borderless';

export interface KitInputNumberProps
    extends Omit<InputNumberProps, AntdInputNumberTypesToOmit>,
        KitHTMLAttributes<HTMLSpanElement | HTMLInputElement> {
    label?: string;
    helper?: string;
}
