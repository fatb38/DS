import {ColorPickerProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {IKitColorPickerTheme} from '@theme/types/components/DataEntry/ColorPicker';
import type {Color} from 'antd/lib/color-picker';

type AntdColorPickerTypesToOmit = 'size';

export interface KitColorPickerProps
    extends Omit<ColorPickerProps, AntdColorPickerTypesToOmit>,
        KitHTMLAttributes<HTMLSpanElement | HTMLInputElement> {
    label?: string;
    helper?: string;
}

export interface IStyledAntdColorPicker {
    $theme: IKitColorPickerTheme;
}

export type KitColor = Color;
