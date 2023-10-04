import InternalCollapse from './Collapse';
import InternalHeader from './Header';
import InternalHeaderExtra from './HeaderExtra';
import {KitCollapseCompoundedComponent} from './types';

export const KitCollapse = InternalCollapse as KitCollapseCompoundedComponent;
KitCollapse.displayName = 'KitCollapse';
KitCollapse.Header = InternalHeader;
KitCollapse.HeaderExtra = InternalHeaderExtra;
