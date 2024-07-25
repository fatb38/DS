import Basic from './basic';
import CustomRender from './customRender';
import Disabled from './disabled';
import Download from './download';
import Group from './group';
import Status from './status';
import Search from './search';
import Wrapper from './wrapper';
import Multipleandtags from './multipleandtags';
import Readonly from './readonly.tsx';

import BasicSource from './basic?raw';
import CustomRenderSource from './customRender?raw';
import DisabledSource from './disabled?raw';
import DownloadSource from './download?raw';
import GroupSource from './group?raw';
import StatusSource from './status?raw';
import SearchSource from './search?raw';
import WrapperSource from './wrapper?raw';
import MultipleandtagsSource from './multipleandtags?raw';
import ReadonlySource from './readonly.tsx?raw';

export const Sources = {
    Basic: BasicSource,
    CustomRender: CustomRenderSource,
    Disabled: DisabledSource,
    Download: DownloadSource,
    Group: GroupSource,
    Status: StatusSource,
    Search: SearchSource,
    Wrapper: WrapperSource,
    Multipleandtags: MultipleandtagsSource,
    Readonly: ReadonlySource
};
export default {
    Basic,
    CustomRender,
    Disabled,
    Download,
    Group,
    Status,
    Search,
    Wrapper,
    Multipleandtags,
    Readonly
};
