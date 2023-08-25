import Basic from './basic';
import Placement from './placement';
import Arrow from './arrow';
import Disabled from './disabled';
import Trigger from './trigger';

import BasicSource from './basic?raw';
import PlacementSource from './placement?raw';
import ArrowSource from './arrow?raw';
import DisabledSource from './arrow?raw';
import TriggerSource from './trigger?raw';

export const Sources = {
    Basic: BasicSource,
    Placement: PlacementSource,
    Arrow: ArrowSource,
    Disabled: DisabledSource,
    Trigger: TriggerSource
};

export default {
    Basic,
    Placement,
    Arrow,
    Disabled,
    Trigger
};
