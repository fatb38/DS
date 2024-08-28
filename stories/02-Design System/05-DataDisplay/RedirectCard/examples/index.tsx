import Actions from './actions';
import Basic from './basic';
import Disabled from './disabled';
import Icon from './icon';
import Cover from './cover';

import ActionsSource from './actions?raw';
import BasicSource from './basic?raw';
import DisabledSource from './disabled?raw';
import IconSource from './icon?raw';
import CoverSource from './cover?raw';

export const Sources = {
    Actions: ActionsSource,
    Basic: BasicSource,
    Disabled: DisabledSource,
    Icon: IconSource,
    Cover: CoverSource
};

export default {
    Actions,
    Basic,
    Disabled,
    Icon,
    Cover
};
