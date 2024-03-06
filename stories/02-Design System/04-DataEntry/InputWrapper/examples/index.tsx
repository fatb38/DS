import Basic from './basic';
import Border from './border';
import Status from './status';
import Disabled from './disabled';
import Required from './required';
import Infos from './infos';
import Actions from './actions';

import BasicSource from './basic?raw';
import BorderSource from './border?raw';
import StatusSource from './status?raw';
import DisabledSource from './disabled?raw';
import RequiredSource from './required?raw';
import InfosSource from './infos?raw';
import ActionsSource from './actions?raw';

export const Sources = {
    Basic: BasicSource,
    Border: BorderSource,
    Status: StatusSource,
    Disabled: DisabledSource,
    Required: RequiredSource,
    Infos: InfosSource,
    Actions: ActionsSource
};
export default {
    Basic,
    Border,
    Status,
    Disabled,
    Required,
    Infos,
    Actions
};
