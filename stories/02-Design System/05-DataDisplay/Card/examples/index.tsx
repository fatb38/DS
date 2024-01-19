import Basic from './basic';
import Full from './full';
import Disabled from './disabled';
import NoPreview from './noPreview';

import BasicSource from './basic?raw';
import FullSource from './full?raw';
import DisabledSource from './disabled?raw';
import NoPreviewSource from './noPreview?raw';

export const Sources = {
    Basic: BasicSource,
    Full: FullSource,
    Disabled: DisabledSource,
    NoPreview: NoPreviewSource
};
export default {
    Basic,
    Full,
    Disabled,
    NoPreview
};
