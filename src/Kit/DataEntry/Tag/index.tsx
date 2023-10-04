import Tag from './Tag';
import {IKitTag} from './types';
import {ForwardRefExoticComponent} from 'react';

type CompoundedComponent = ForwardRefExoticComponent<IKitTag> & {};

export const KitTag = Tag as unknown as CompoundedComponent;
KitTag.displayName = 'KitTag';
