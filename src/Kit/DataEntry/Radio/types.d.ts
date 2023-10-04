import {RadioProps, RadioGroupProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {ReactNode, CSSProperties} from 'react';
import {IKitRadioTheme} from '@theme/types/components/DataEntry/Radio';

export interface KitRadioProps extends RadioProps, KitHTMLAttributes<HTMLLabelElement> {
    danger?: boolean;
    className?: string;
    children?: ReactNode;
    prefixCls?: string;
    disabled?: boolean;
    defaultValue?: any;
    value?: any;
    checked?: boolean;
    style?: CSSProperties;
}

export interface KitRadioGroupProps extends RadioGroupProps, KitHTMLAttributes<HTMLDivElement> {
    defaultValue?: any;
    value?: any;
}

export interface IStyledKitRadio {
    $theme: IKitRadioTheme;
}
