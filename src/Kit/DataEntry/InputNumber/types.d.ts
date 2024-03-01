import {InputNumberProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {ReactNode} from 'react';

type AntdInputNumberTypesToOmit = 'size' | 'addonBefore' | 'addonAfter' | 'borderless' | 'suffix';

export interface KitInputNumberProps
    extends Omit<InputNumberProps, AntdInputNumberTypesToOmit>,
        KitHTMLAttributes<HTMLSpanElement | HTMLInputElement> {
    label?: string;
    helper?: string;
    wrapperClassName?: string;
    required?: boolean;
    infoIcon?: ReactNode;
    actions?: ReactElement[];
    onInfoClick?: (e: MouseEvent<HTMLElement, MouseEvent>) => void;
}
