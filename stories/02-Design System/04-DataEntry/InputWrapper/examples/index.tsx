import Basic from './basic';
import Border from './border';
import Status from './status';
import Disabled from './disabled';

import BasicSource from './basic?raw';
import BorderSource from './border?raw';
import StatusSource from './status?raw';
import DisabledSource from './disabled?raw';

export const Sources = {
    Basic: BasicSource,
    Border: BorderSource,
    Status: StatusSource,
    Disabled: DisabledSource
};
export default {
    Basic,
    Border,
    Status,
    Disabled
};
