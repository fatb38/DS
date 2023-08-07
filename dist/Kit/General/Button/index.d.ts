import React from "react";
import type { KitButtonProps } from "./types";
type CompoundedComponent = React.ForwardRefExoticComponent<KitButtonProps & React.RefAttributes<HTMLElement>>;
export declare const KitButton: CompoundedComponent;
export {};
