import Basic from './basic';
import WithImage from './withImage';
import WithContent from './withContent';
import Disabled from './disabled';

import BasicSource from './basic?raw';
import WithImageSource from './withImage?raw';
import WithContentSource from './withContent?raw';
import DisabledSource from './disabled?raw';

export const Sources = {
    Basic: BasicSource,
    WithImage: WithImageSource,
    WithContent: WithContentSource,
    Disabled: DisabledSource
};

export default {
    Basic,
    WithImage,
    WithContent,
    Disabled
};
