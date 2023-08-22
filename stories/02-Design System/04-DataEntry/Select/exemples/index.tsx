import Basic from './basic';
import Disabled from './disabled';
import Download from './download';
import Group from './group';
import Status from './status';
import Wrapper from './wrapper';

import BasicSource from './basic?raw';
import DisabledSource from './disabled?raw';
import DownloadSource from './download?raw';
import GroupSource from './group?raw';
import StatusSource from './status?raw';
import WrapperSource from './wrapper?raw';

export const Sources = {
    Basic: BasicSource,
    Disabled: DisabledSource,
    Download: DownloadSource,
    Group: GroupSource,
    Status: StatusSource,
    Wrapper: WrapperSource
};
export default {
    Basic,
    Disabled,
    Download,
    Group,
    Status,
    Wrapper
};
