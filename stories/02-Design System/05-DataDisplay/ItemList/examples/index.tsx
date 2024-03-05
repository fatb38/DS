import Basic from './basic';
import Selectable from './selectable';
import Picture from './picture';
import Tag from './tag';
import Rafter from './rafter';
import All from './all';
import Sizing from './sizing';
import Disabled from './disabled';
import Draggable from './draggable/draggable.tsx';

import BasicSource from './basic?raw';
import SelectableSource from './selectable?raw';
import PictureSource from './picture?raw';
import TagSource from './tag?raw';
import RafterSource from './rafter?raw';
import AllSource from './all?raw';
import SizingSource from './sizing?raw';
import DisabledSource from './disabled?raw';
import DraggableSource from './draggable/draggable.tsx?raw';

export const Sources = {
    Basic: BasicSource,
    Selectable: SelectableSource,
    Picture: PictureSource,
    Tag: TagSource,
    Rafter: RafterSource,
    All: AllSource,
    Sizing: SizingSource,
    Disabled: DisabledSource,
    Draggable: DraggableSource
};

export default {
    Basic,
    Selectable,
    Picture,
    Tag,
    Rafter,
    All,
    Sizing,
    Disabled,
    Draggable
};
