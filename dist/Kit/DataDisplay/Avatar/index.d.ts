/// <reference types="react" />
import { KitAvatarGroupProps, KitAvatarProps } from "./types";
type CompoundedComponent = React.FunctionComponent<KitAvatarProps> & {
    Group: React.FunctionComponent<KitAvatarGroupProps>;
};
export declare const KitAvatar: CompoundedComponent;
export {};
