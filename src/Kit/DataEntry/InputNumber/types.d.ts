import {InputNumberProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {IKitInputNumberTheme} from '@theme/types/components/DataEntry/InputNumber';

type AntdInputNumberTypesToOmit = 'size' | 'addonBefore' | 'addonAfter' | 'borderless';

export interface KitInputNumberProps
    extends Omit<InputNumberProps, AntdInputNumberTypesToOmit>,
        KitHTMLAttributes<HTMLSpanElement | HTMLInputElement> {
    label?: string;
    helper?: string;
}

export interface IStyledAntdInputNumber {
    $theme: IKitInputNumberTheme;
}
