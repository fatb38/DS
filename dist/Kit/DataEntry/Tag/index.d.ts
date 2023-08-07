import type * as React from "react";
import { KitTagInputProps, KitTagProps } from "./types";
type CompoundedComponent = React.ForwardRefExoticComponent<KitTagProps> & {
    Input: React.FunctionComponent<KitTagInputProps>;
};
export declare const KitTag: CompoundedComponent;
export {};
