import InternalAvatar from './Avatar';
import InternalAvatarGroup from './AvatarGroup';
import {KitAvatarCompoundedComponent} from './types';

export const KitAvatar = InternalAvatar as KitAvatarCompoundedComponent;
KitAvatar.displayName = 'KitAvatar';
KitAvatar.Group = InternalAvatarGroup;
