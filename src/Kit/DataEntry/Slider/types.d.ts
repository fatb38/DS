import {SliderSingleProps} from 'antd';
import {SliderMarks, SliderRangeProps} from 'antd/es/slider';

type AntdSliderTypesToOmit = 'vertical' | 'trackStyle' | 'railStyle' | 'handleStyle' | 'marks';

interface SliderIcons {
    startIcon?: any;
    endIcon?: any;
}

export interface KitSliderMarks extends SliderMarks {}

export interface KitSliderSingleProps extends Omit<SliderSingleProps, AntdSliderTypesToOmit>, SliderIcons {
    marks?: KitSliderMarks;
}
export interface KitSliderRangeProps extends Omit<SliderRangeProps, AntdSliderTypesToOmit>, SliderIcons {
    marks?: KitSliderMarks;
}
