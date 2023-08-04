import InternalAvatar from "./Avatar";
import InternalAvatarGroup from "./AvatarGroup";
import { KitAvatarGroupProps, KitAvatarProps } from "./types";

type CompoundedComponent = React.FunctionComponent<KitAvatarProps> & {
    Group: React.FunctionComponent<KitAvatarGroupProps>;
};

export const KitAvatar = (InternalAvatar as unknown) as CompoundedComponent;
KitAvatar.displayName = "KitAvatar";
KitAvatar.Group = InternalAvatarGroup;
