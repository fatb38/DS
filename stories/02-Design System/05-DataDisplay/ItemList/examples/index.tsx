import Actions from './actions';
import All from './all';
import Basic from './basic';
import Content from './content';
import Draggable from './draggable';
import Selectable from './selectable';

import ActionsSource from './actions?raw';
import AllSource from './all?raw';
import BasicSource from './basic?raw';
import ContentSource from './content?raw';
import DraggableSource from './draggable?raw';
import SelectableSource from './selectable?raw';

export const Sources = {
    Actions: ActionsSource,
    All: AllSource,
    Basic: BasicSource,
    Content: ContentSource,
    Draggable: DraggableSource,
    Selectable: SelectableSource
};

export default {
    Actions,
    All,
    Basic,
    Content,
    Draggable,
    Selectable
};
