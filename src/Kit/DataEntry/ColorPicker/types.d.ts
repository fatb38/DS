import {ColorPickerProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import type {Color} from 'antd/es/color-picker';

type AntdColorPickerTypesToOmit = 'size';

export interface KitColorPickerProps
    extends Omit<ColorPickerProps, AntdColorPickerTypesToOmit>,
        KitHTMLAttributes<HTMLSpanElement | HTMLInputElement> {
    label?: string;
    helper?: string;
}

export type KitColor = Color;
