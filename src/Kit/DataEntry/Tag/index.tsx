import type * as React from 'react';
import Tag from './Tag';
import TagInput from './TagInput';
import {KitTagInputProps, KitTagProps} from './types';

type CompoundedComponent = React.ForwardRefExoticComponent<KitTagProps> & {
    Input: React.FunctionComponent<KitTagInputProps>;
};

export const KitTag = Tag as unknown as CompoundedComponent;
KitTag.displayName = 'KitTag';
KitTag.Input = TagInput;
