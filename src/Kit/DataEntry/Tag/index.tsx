import type * as React from 'react';
import Tag from './Tag';
import {KitTagProps} from './types';

type CompoundedComponent = React.ForwardRefExoticComponent<KitTagProps> & {};

export const KitTag = Tag as unknown as CompoundedComponent;
KitTag.displayName = 'KitTag';
