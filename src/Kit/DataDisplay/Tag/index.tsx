import KitGroup from './Group';
import {InternalTag} from './Tag';
import {IKitTag, IKitTagGroup} from './types';
import {ForwardRefExoticComponent, FunctionComponent} from 'react';

type CompoundedComponent = ForwardRefExoticComponent<IKitTag> & {
    Group: FunctionComponent<IKitTagGroup>;
};

export const KitTag = InternalTag as unknown as CompoundedComponent;
KitTag.displayName = 'KitTag';
KitTag.Group = KitGroup;
