import Basic from './basic';
import Linear from './linear';
import Infinite from './infinite';

import BasicSource from './basic?raw';
import LinearSource from './linear?raw';
import InfiniteSource from './infinite?raw';

export const Sources = {
    Basic: BasicSource,
    Linear: LinearSource,
    Infinite: InfiniteSource
};
export default {
    Basic,
    Linear,
    Infinite
};
