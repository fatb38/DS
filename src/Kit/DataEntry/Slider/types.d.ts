type AntdSliderTypesToOmit = '';

export interface KitSliderProps extends Omit<SliderSingleProps | SliderRangeProps, AntdSelectTypesToOmit> {}
