import Basic from './basic';
import Placement from './placement';
import Arrow from './arrow';

import BasicSource from './basic?raw';
import PlacementSource from './placement?raw';
import ArrowSource from './arrow?raw';

export const Sources = {
    Basic: BasicSource,
    Placement: PlacementSource,
    Arrow: ArrowSource
};

export default {
    Basic,
    Placement,
    Arrow
};
