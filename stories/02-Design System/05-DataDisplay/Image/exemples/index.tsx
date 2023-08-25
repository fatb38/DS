import Basic from './basic';
import Bordered from './bordered';
import FaultTolerant from './faultTolerant';
import Loading from './loading';
import MultiplePreview from './multiplePreview';
import Preview from './preview';
import Custom from './custom';
import Controlled from './controlled';

import BasicSource from './basic?raw';
import BorderedSource from './bordered?raw';
import FaultTolerantSource from './faultTolerant?raw';
import LoadingSource from './loading?raw';
import MultiplePreviewSource from './multiplePreview?raw';
import PreviewSource from './preview?raw';
import CustomSource from './custom?raw';
import ControlledSource from './controlled?raw';

export const Sources = {
    Basic: BasicSource,
    Bordered: BorderedSource,
    FaultTolerant: FaultTolerantSource,
    Loading: LoadingSource,
    MultiplePreview: MultiplePreviewSource,
    Preview: PreviewSource,
    Custom: CustomSource,
    Controlled: ControlledSource
};

export default {
    Basic,
    Bordered,
    FaultTolerant,
    Loading,
    MultiplePreview,
    Preview,
    Custom,
    Controlled
};
