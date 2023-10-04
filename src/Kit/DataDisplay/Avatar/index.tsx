import {FunctionComponent} from 'react';
import InternalAvatar from './Avatar';
import InternalAvatarGroup from './AvatarGroup';
import {IKitAvatarGroup, IKitAvatar} from './types';

type CompoundedComponent = FunctionComponent<IKitAvatar> & {
    Group: FunctionComponent<IKitAvatarGroup>;
};

export const KitAvatar = InternalAvatar as unknown as CompoundedComponent;
KitAvatar.displayName = 'KitAvatar';
KitAvatar.Group = InternalAvatarGroup;
