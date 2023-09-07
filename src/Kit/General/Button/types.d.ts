import {ButtonProps} from 'antd';
import {HTMLAttributes} from 'react';

export type KitButtonType = 'primary' | 'default' | 'link' | 'segmented';

export type AntdButtonTypesToOmit = 'type' | 'size' | 'ghost' | 'shape' | 'styles';

export interface KitButtonProps extends Omit<ButtonProps, AntdButtonTypesToOmit>, HTMLAttributes<HTMLDivElement> {
    type?: KitButtonType;
    segmentedActived?: boolean;
    segmentedChecked?: boolean;
    bigIcon?: boolean;
    primaryModal?: boolean;
}

export interface KitButtonTheme {
    font: {
        weight: string | number;
        bigIconSize: number;
    };
    color: {
        default: string;
        hover: string;
        active: string;
        focus: string;
        disabled: string;
        danger: {
            default: string;
            disabled: string;
        };
        iconCheck?: string;
    };
    compactBorderRadius: number;
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
