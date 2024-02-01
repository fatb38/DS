import Basic from './basic';
import Disabled from './disabled';
import Danger from './danger';
import Group from './group';
import VerticalGroup from './verticalGroup';
import NamedGroup from './namedGroup';
import LabelHelper from './labelHelper';

import BasicSource from './basic?raw';
import DisabledSource from './disabled?raw';
import DangerSource from './danger?raw';
import GroupSource from './group?raw';
import VerticalGroupSource from './verticalGroup?raw';
import NamedGroupSource from './namedGroup?raw';
import LabelHelperSource from './labelHelper?raw';

export const Sources = {
    Basic: BasicSource,
    Disabled: DisabledSource,
    Danger: DangerSource,
    Group: GroupSource,
    VerticalGroup: VerticalGroupSource,
    NamedGroup: NamedGroupSource,
    LabelHelper: LabelHelperSource
};

export default {
    Basic,
    Disabled,
    Danger,
    Group,
    VerticalGroup,
    NamedGroup,
    LabelHelper
};
