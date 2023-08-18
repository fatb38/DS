import type * as React from 'react';
import type { KitRadioProps as RadioProps } from './types';
import type { RadioChangeEvent, RadioChangeEventTarget, RadioGroupButtonStyle, RadioGroupContextProps, RadioGroupOptionType, RadioGroupProps } from 'antd/lib/radio/interface';
export { RadioChangeEvent, RadioChangeEventTarget, RadioGroupButtonStyle, RadioGroupContextProps, RadioGroupOptionType, RadioGroupProps };
type CompoundedComponent = React.ForwardRefExoticComponent<RadioProps> & {
    Group: React.ForwardRefRenderFunction<HTMLDivElement, RadioGroupProps>;
};
export declare const KitRadio: CompoundedComponent;
