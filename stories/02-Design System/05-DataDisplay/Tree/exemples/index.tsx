import Basic from './basic';
import Selectable from './selectable';
import CustomIcon from './customIcon';
import CustomCollapseIcon from './customCollapseIcon';
import Line from './line';

import BasicSource from './basic?raw';
import SelectableSource from './selectable?raw';
import CustomIconSource from './customIcon?raw';
import CustomCollapseIconSource from './customCollapseIcon?raw';
import LineSource from './line?raw';

export const Sources = {
    Basic: BasicSource,
    Selectable: SelectableSource,
    CustomIcon: CustomIconSource,
    CustomCollapseIcon: CustomCollapseIconSource,
    Line: LineSource
};

export default {
    Basic,
    Selectable,
    CustomIcon,
    CustomCollapseIcon,
    Line
};
