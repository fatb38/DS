import {InputNumberProps} from 'antd';
import {HTMLAttributes} from 'react';

type AntdInputNumberTypesToOmit = 'size' | 'addonBefore' | 'addonAfter' | 'borderless';

export interface KitInputNumberProps
    extends Omit<InputNumberProps, AntdInputNumberTypesToOmit>,
        HTMLAttributes<HTMLSpanElement | HTMLInputElement> {}
