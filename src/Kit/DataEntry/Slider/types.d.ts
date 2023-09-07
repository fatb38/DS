import {SliderSingleProps, SliderRangeProps} from 'antd/lib';

type AntdSliderTypesToOmit = 'vertical' | 'trackStyle' | 'railStyle' | 'handleStyle';

interface SliderIcons {
    startIcon?: any;
    endIcon?: any;
}

export interface KitSliderSingleProps extends Omit<SliderSingleProps, AntdSliderTypesToOmit>, SliderIcons {}
export interface KitSliderRangeProps extends Omit<SliderRangeProps, AntdSliderTypesToOmit>, SliderIcons {}
