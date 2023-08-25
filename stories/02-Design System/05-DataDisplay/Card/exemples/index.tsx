import Basic from './basic';
import Vertical from './vertical';
import Icon from './icon';
import Avatar from './avatar';
import Tags from './tags';
import Colors from './colors';
import Selectable from './selectable';
import Editable from './editable';
import Actions from './actions';
import Disabled from './disabled';

import BasicSource from './basic?raw';
import VerticalSource from './vertical?raw';
import IconSource from './icon?raw';
import AvatarSource from './avatar?raw';
import TagsSource from './tags?raw';
import ColorsSource from './colors?raw';
import SelectableSource from './selectable?raw';
import EditableSource from './editable?raw';
import ActionsSource from './actions?raw';
import DisabledSource from './disabled?raw';

export const Sources = {
    Basic: BasicSource,
    Vertical: VerticalSource,
    Icon: IconSource,
    Avatar: AvatarSource,
    Tags: TagsSource,
    Colors: ColorsSource,
    Selectable: SelectableSource,
    Editable: EditableSource,
    Actions: ActionsSource,
    Disabled: DisabledSource
};

export default {
    Basic,
    Vertical,
    Icon,
    Avatar,
    Tags,
    Colors,
    Selectable,
    Editable,
    Actions,
    Disabled
};
