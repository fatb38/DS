/// <reference types="react" />
import { KitItemMenuProps, KitMenuProps } from "./types";
type CompoundedComponent = React.FunctionComponent<KitMenuProps> & {
    Item: React.FunctionComponent<KitItemMenuProps>;
};
export declare const KitMenu: CompoundedComponent;
export {};
