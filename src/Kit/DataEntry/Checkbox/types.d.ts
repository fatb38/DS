import {CheckboxProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';

export interface KitCheckboxProps extends CheckboxProps, KitHTMLAttributes<HTMLLabelElement> {
    danger?: boolean;
}

export interface KitCheckboxTheme {
    fontWeight: {
        default: string | number;
        checked: string | number;
    };
    borderWidth: string;
    color: {
        default: string;
        disabled: string;
        danger: {
            default: string;
            disabled: string;
        };
    };
    backgroundColor: {
        default: string;
        hover: string;
        active: string;
        focus: string;
        disabled: string;
        danger: {
            default: string;
            hover: string;
            active: string;
            focus: string;
            disabled: string;
        };
    };
    borderColor: {
        default: string;
        hover: string;
        active: string;
        focus: string;
        disabled: string;
        danger: {
            default: string;
            hover: string;
            active: string;
            focus: string;
            disabled: string;
        };
    };
}
