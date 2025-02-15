import type {ForwardRefExoticComponent, ForwardRefRenderFunction} from 'react';
import Group from './Group';
import type {KitRadioGroup, KitRadioProps as RadioProps} from './types';
import InternalRadio from './Radio';

import type {
    RadioChangeEvent,
    RadioChangeEventTarget,
    RadioGroupButtonStyle,
    RadioGroupContextProps,
    RadioGroupOptionType,
    RadioGroupProps
} from 'antd/es/radio/interface';

export {
    RadioChangeEvent,
    RadioChangeEventTarget,
    RadioGroupButtonStyle,
    RadioGroupContextProps,
    RadioGroupOptionType,
    RadioGroupProps
};

type CompoundedComponent = ForwardRefExoticComponent<RadioProps> & {
    Group: ForwardRefRenderFunction<HTMLDivElement, KitRadioGroup>;
};

export const KitRadio = InternalRadio as unknown as CompoundedComponent;
KitRadio.displayName = 'KitRadio';
KitRadio.Group = Group;
