import { ForwardRefRenderFunction } from 'react';
import React from 'react';
import { ICheckboxGroupContext, ICheckboxGroup } from './types';
export declare const GroupContext: React.Context<ICheckboxGroupContext | null>;
export declare const InternalCheckboxGroup: ForwardRefRenderFunction<HTMLDivElement, ICheckboxGroup>;
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<ICheckboxGroup & React.RefAttributes<HTMLDivElement>>>;
export default _default;
