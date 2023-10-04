import {FunctionComponent} from 'react';
import InternalCollapse from './Collapse';
import InternalHeader from './Header';
import InternalHeaderExtra from './HeaderExtra';
import {IKitHeader, IKitCollapse, IKitHeaderExtra} from './types';

type CompoundedComponent = FunctionComponent<IKitCollapse> & {
    Header: FunctionComponent<IKitHeader>;
    HeaderExtra: FunctionComponent<IKitHeaderExtra>;
};

export const KitCollapse = InternalCollapse as unknown as CompoundedComponent;
KitCollapse.displayName = 'KitCollapse';
KitCollapse.Header = InternalHeader;
KitCollapse.HeaderExtra = InternalHeaderExtra;
