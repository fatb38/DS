import {SliderSingleProps} from 'antd';
import {SliderMarks, SliderRangeProps} from 'antd/lib/slider';
import {ReactNode} from 'react';

type AntdSliderTypesToOmit = 'vertical' | 'trackStyle' | 'railStyle' | 'handleStyle' | 'marks' | 'value';

interface SliderIcons {
    startIcon?: ReactNode;
    endIcon?: ReactNode;
}

export type KitSliderMarks = SliderMarks;

export interface IKitSliderSingle extends Omit<SliderSingleProps, AntdSliderTypesToOmit>, SliderIcons {
    marks?: KitSliderMarks;
    value?: number;
}
export interface IKitSliderRange extends Omit<SliderRangeProps, AntdSliderTypesToOmit>, SliderIcons {
    marks?: KitSliderMarks;
    value?: [number, number];
}

export interface IStyledKitSlider {
    $isStartIcon: boolean;
    $isEndIcon: boolean;
}
