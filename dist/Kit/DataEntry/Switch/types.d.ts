import {SwitchProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';

export interface KitSwitchProps extends SwitchProps, KitHTMLAttributes<HTMLButtonElement> {}

export interface StyledSwitchProps extends SwitchProps {}

export interface KitSwitchTheme {
    fontWeight: {
        default: string | number;
        checked: string | number;
    };
    borderWidth: string;
    width: number;
    height: number;
    iconFontSize: number;
    pinHeight: number;
    handle: {
        borderWidth: string;
        borderColor: {
            default: {
                off: string;
                on: string;
            };
            disabled: {
                off: string;
                on: string;
            };
            focus: {
                off: string;
                on: string;
            };
        };
        backgroundColor: {
            default: {on: string; off: string};
            disabled: string;
        };
    };
    backgroundColor: {
        default: {
            on: string;
            off: string;
        };
        focus: {
            on: string;
            off: string;
        };
        disabled: {
            on: string;
            off: string;
        };
    };
}
