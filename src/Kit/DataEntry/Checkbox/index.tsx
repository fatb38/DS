import {ForwardRefExoticComponent, ForwardRefRenderFunction} from 'react';
import {IKitCheckbox, ICheckboxGroup} from './types';
import InternalCheckbox from './Checkbox';
import Group from './Group';

export type {CheckboxChangeEvent} from 'antd/lib/checkbox/Checkbox';
export type {CheckboxGroupProps, CheckboxOptionType} from 'antd/lib/checkbox/Group';

type CompoundedComponent = ForwardRefExoticComponent<IKitCheckbox> & {
    Group: ForwardRefRenderFunction<HTMLDivElement, ICheckboxGroup>;
};

export const KitCheckbox = InternalCheckbox as unknown as CompoundedComponent;
KitCheckbox.displayName = 'KitCheckbox';
KitCheckbox.Group = Group;
