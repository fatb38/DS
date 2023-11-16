import Basic from './basic';
import Clickable from './clickable';
import Colors from './colors';

import BasicSource from './basic?raw';
import ClickableSource from './clickable?raw';
import ColorsSource from './colors?raw';

export const Sources = {
    Basic: BasicSource,
    Clickable: ClickableSource,
    Colors: ColorsSource
};

export default {
    Basic,
    Clickable,
    Colors
};
