import type * as React from "react";
import { KitCheckboxProps } from "./types";
import { CheckboxGroupProps } from "antd/es/checkbox";
export type { CheckboxChangeEvent } from "antd/lib/checkbox/Checkbox";
export type { CheckboxGroupProps, CheckboxOptionType, } from "antd/lib/checkbox/Group";
type CompoundedComponent = React.ForwardRefExoticComponent<KitCheckboxProps> & {
    Group: React.ForwardRefRenderFunction<HTMLDivElement, CheckboxGroupProps>;
};
export declare const KitCheckbox: CompoundedComponent;
