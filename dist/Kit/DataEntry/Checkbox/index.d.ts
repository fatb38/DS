import { ForwardRefExoticComponent, ForwardRefRenderFunction } from 'react';
import { IKitCheckbox } from './types';
import { CheckboxGroupProps } from 'antd/lib/checkbox';
export type { CheckboxChangeEvent } from 'antd/lib/checkbox/Checkbox';
export type { CheckboxGroupProps, CheckboxOptionType } from 'antd/lib/checkbox/Group';
type CompoundedComponent = ForwardRefExoticComponent<IKitCheckbox> & {
    Group: ForwardRefRenderFunction<HTMLDivElement, CheckboxGroupProps>;
};
export declare const KitCheckbox: CompoundedComponent;
