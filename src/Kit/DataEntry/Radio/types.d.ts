/* eslint-disable @typescript-eslint/no-explicit-any */
import {RadioProps, RadioGroupProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {ReactNode, CSSProperties, ReactElement, MouseEvent} from 'react';

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

export interface KitRadioGroup extends RadioGroupProps, KitHTMLAttributes<HTMLDivElement> {
    defaultValue?: any;
    value?: any;
    label?: string;
    helper?: string;
    status?: '' | 'warning' | 'error';
    bordered?: boolean;
    wrapperClassName?: string;
    required?: boolean;
    infoIcon?: ReactNode;
    actions?: ReactElement[];
    onInfoClick?: (e: MouseEvent<HTMLElement, MouseEvent>) => void;
}
