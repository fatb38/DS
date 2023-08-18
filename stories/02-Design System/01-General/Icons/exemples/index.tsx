import Basic from './basic';
import Hoverable from './hoverable';
import Clickable from './clickable';

import BasicSource from './basic?raw';
import HoverableSource from './hoverable?raw';
import ClickableSource from './clickable?raw';

export const Sources = {
    Basic: BasicSource,
    Hoverable: HoverableSource,
    Clickable: ClickableSource,
};

export default {
    Basic,
    Hoverable,
    Clickable
};