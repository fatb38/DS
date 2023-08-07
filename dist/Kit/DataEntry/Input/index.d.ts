/// <reference types="react" />
import { KitInputProps, KitPasswordProps, KitTextAreaProps } from "./types";
type CompoundedComponent = React.FunctionComponent<KitInputProps> & {
    TextArea: React.FunctionComponent<KitTextAreaProps>;
    Password: React.FunctionComponent<KitPasswordProps>;
};
export declare const KitInput: CompoundedComponent;
export {};
