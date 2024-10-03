import All from './all';
import Basic from './basic';
import Content from './content';
import IdCardSubstitute from './idCardSubstitute';
import Actions from './actions';
import Disabled from './disabled';
import Draggable from './draggable';
import Selectable from './selectable';

import AllSource from './all?raw';
import BasicSource from './basic?raw';
import ContentSource from './content?raw';
import IdCardSubstituteSource from './idCardSubstitute?raw';
import ActionsSource from './actions?raw';
import DisabledSource from './disabled?raw';
import DraggableSource from './draggable?raw';
import SelectableSource from './selectable?raw';

export const Sources = {
    All: AllSource,
    Basic: BasicSource,
    Content: ContentSource,
    IdCardSubstitute: IdCardSubstituteSource,
    Actions: ActionsSource,
    Disabled: DisabledSource,
    Draggable: DraggableSource,
    Selectable: SelectableSource
};

export default {
    Actions,
    All,
    Basic,
    Content,
    IdCardSubstitute,
    Disabled,
    Draggable,
    Selectable
};
