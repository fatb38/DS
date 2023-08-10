/// <reference types="react" />
import { KitColProps, KitRowProps } from './types';
type CompoundedComponent = {
    Row: React.FunctionComponent<KitRowProps>;
    Col: React.FunctionComponent<KitColProps>;
    displayName?: string;
};
export declare const KitGrid: CompoundedComponent;
export {};
