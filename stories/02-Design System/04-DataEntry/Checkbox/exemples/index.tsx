import Basic from './basic';
import Controlled from './controlled';
import CheckAll from './checkAll';
import Disabled from './disabled';
import Danger from './danger';
import Group from './group';
import Grid from './grid';

import BasicSource from './basic?raw';
import ControlledSource from './controlled?raw';
import CheckAllSource from './checkAll?raw';
import DisabledSource from './disabled?raw';
import DangerSource from './danger?raw';
import GroupSource from './group?raw';
import GridSource from './grid?raw';

export const Sources = {
    Basic: BasicSource,
    Controlled: ControlledSource,
    CheckAll: CheckAllSource,
    Disabled: DisabledSource,
    Danger: DangerSource,
    Group: GroupSource,
    Grid: GridSource
};
export default {
    Basic,
    Controlled,
    CheckAll,
    Disabled,
    Danger,
    Group,
    Grid
};
