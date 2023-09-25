import type * as React from 'react';
import {KitCheckboxProps} from './types';
import InternalCheckbox from './Checkbox';
import Group from './Group';
import {CheckboxGroupProps} from 'antd/lib/checkbox';

export type {CheckboxChangeEvent} from 'antd/lib/checkbox/Checkbox';
export type {CheckboxGroupProps, CheckboxOptionType} from 'antd/lib/checkbox/Group';

type CompoundedComponent = React.ForwardRefExoticComponent<KitCheckboxProps> & {
    Group: React.ForwardRefRenderFunction<HTMLDivElement, CheckboxGroupProps>;
};

export const KitCheckbox = InternalCheckbox as unknown as CompoundedComponent;
KitCheckbox.displayName = 'KitCheckbox';
KitCheckbox.Group = Group;
