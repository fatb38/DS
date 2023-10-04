import React from 'react';
import type { IKitButtonProps } from './types';
type CompoundedComponent = React.ForwardRefExoticComponent<IKitButtonProps & React.RefAttributes<HTMLElement>>;
export declare const KitButton: CompoundedComponent;
export {};
