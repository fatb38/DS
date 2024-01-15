import {InputNumberProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';

type AntdInputNumberTypesToOmit = 'size' | 'addonBefore' | 'addonAfter' | 'borderless' | 'suffix';

export interface KitInputNumberProps
    extends Omit<InputNumberProps, AntdInputNumberTypesToOmit>,
        KitHTMLAttributes<HTMLSpanElement | HTMLInputElement> {
    label?: string;
    helper?: string;
    wrapperClassName?: string;
}
