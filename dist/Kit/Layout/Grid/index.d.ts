import { IKitCol, IKitRow } from './types';
import { FunctionComponent } from 'react';
type CompoundedComponent = {
    Row: FunctionComponent<IKitRow>;
    Col: FunctionComponent<IKitCol>;
    displayName?: string;
};
export declare const KitGrid: CompoundedComponent;
export {};
