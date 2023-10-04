import {SliderSingleProps} from 'antd';
import {SliderMarks, SliderRangeProps} from 'antd/lib/slider';
import {IKitSliderTheme} from '@theme/types/components/DataEntry/Slider';

type AntdSliderTypesToOmit = 'vertical' | 'trackStyle' | 'railStyle' | 'handleStyle' | 'marks';

interface SliderIcons {
    startIcon?: any;
    endIcon?: any;
}

export type KitSliderMarks = SliderMarks;

export interface IKitSliderSingle extends Omit<SliderSingleProps, AntdSliderTypesToOmit>, SliderIcons {
    marks?: KitSliderMarks;
}
export interface IKitSliderRange extends Omit<SliderRangeProps, AntdSliderTypesToOmit>, SliderIcons {
    marks?: KitSliderMarks;
}

export interface IStyledKitSlider {
    $theme: IKitSliderTheme;
    $isStartIcon: boolean;
    $isEndIcon: boolean;
}
