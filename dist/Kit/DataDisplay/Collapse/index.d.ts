/// <reference types="react" />
import { KitHeaderProps, KitCollapseProps, KitHeaderExtraProps } from './types';
type CompoundedComponent = React.FunctionComponent<KitCollapseProps> & {
    Header: React.FunctionComponent<KitHeaderProps>;
    HeaderExtra: React.FunctionComponent<KitHeaderExtraProps>;
};
export declare const KitCollapse: CompoundedComponent;
export {};
