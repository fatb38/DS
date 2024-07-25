import Basic from './basic';
import Full from './full';
import Disabled from './disabled';
import Draggable from './draggable';
import Icon from './icon';
import Image from './image';

import BasicSource from './basic?raw';
import FullSource from './full?raw';
import DisabledSource from './disabled?raw';
import DraggableSource from './draggable?raw';
import IconSource from './icon?raw';
import ImageSource from './image?raw';

export const Sources = {
    Basic: BasicSource,
    Full: FullSource,
    Disabled: DisabledSource,
    Draggable: DraggableSource,
    Icon: IconSource,
    Image: ImageSource
};
export default {
    Basic,
    Full,
    Disabled,
    Draggable,
    Icon,
    Image
};
