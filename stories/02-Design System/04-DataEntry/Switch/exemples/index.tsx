import Basic from './basic';
import Disabled from './disabled';
import Loading from './loading';

import BasicSource from './basic?raw';
import DisabledSource from './disabled?raw';
import LoadingSource from './loading?raw';

export const Sources = {
    Basic: BasicSource,
    Disabled: DisabledSource,
    Loading: LoadingSource
};
export default {
    Basic,
    Disabled,
    Loading
};
