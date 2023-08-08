import InternalCollapse from './Collapse';
import InternalHeader from './Header';
import InternalHeaderExtra from './HeaderExtra';
import {KitHeaderProps, KitCollapseProps, KitHeaderExtraProps} from './types';

type CompoundedComponent = React.FunctionComponent<KitCollapseProps> & {
    Header: React.FunctionComponent<KitHeaderProps>;
    HeaderExtra: React.FunctionComponent<KitHeaderExtraProps>;
};

export const KitCollapse = InternalCollapse as unknown as CompoundedComponent;
KitCollapse.displayName = 'KitCollapse';
KitCollapse.Header = InternalHeader;
KitCollapse.HeaderExtra = InternalHeaderExtra;
