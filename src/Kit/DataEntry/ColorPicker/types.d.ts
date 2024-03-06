import {ColorPickerProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import type {Color} from 'antd/es/color-picker';
import {ReactNode, ReactElement, MouseEvent} from 'react';

type AntdColorPickerTypesToOmit = 'size';

export interface KitColorPickerProps
    extends Omit<ColorPickerProps, AntdColorPickerTypesToOmit>,
        KitHTMLAttributes<HTMLSpanElement | HTMLInputElement> {
    label?: string;
    helper?: string;
    required?: boolean;
    infoIcon?: ReactNode;
    actions?: ReactElement[];
    onInfoClick?: (e: MouseEvent<HTMLElement, MouseEvent>) => void;
}

export type KitColor = Color;
