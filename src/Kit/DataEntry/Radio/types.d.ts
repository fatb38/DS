import {RadioProps, RadioGroupProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {ReactNode, CSSProperties} from 'react';

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

export interface StyledKitRadioProps extends RadioProps {}

export interface KitRadioGroupProps extends RadioGroupProps, KitHTMLAttributes<HTMLDivElement> {
    defaultValue?: any;
    value?: any;
}

export interface KitRadioTheme {
    fontWeight: {
        default: string | number;
        checked: string | number;
    };
    borderWidth: string;
    color: {
        default: string;
        disabled: string;
        enabled: string;
        danger: {
            default: string;
            disabled: string;
        };
    };
    backgroundColor: {
        default: string;
        checked: string;
        hover: string;
        disabled: string;
        danger: {
            default: string;
            hover: string;
            disabled: string;
        };
    };
    borderColor: {
        default: string;
        checked: string;
        hover: string;
        disabled: string;
        danger: {
            default: string;
            hover: string;
            disabled: string;
        };
    };
    bulletColor: {
        default: string;
        hover: string;
        disabled: string;
        danger: {
            default: string;
            hover: string;
            disabled: string;
        };
    };
}
