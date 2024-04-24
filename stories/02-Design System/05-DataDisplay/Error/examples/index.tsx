import Basic from './basic';
import Description from './description';
import Integrated from './integrated';
import Responsive from './responsive';

import BasicSource from './basic?raw';
import DescriptionSource from './description?raw';
import IntegratedSource from './integrated?raw';
import ResponsiveSource from './responsive?raw';

export const Sources = {
    Basic: BasicSource,
    Description: DescriptionSource,
    Integrated: IntegratedSource,
    Responsive: ResponsiveSource
};

export default {
    Basic,
    Description,
    Integrated,
    Responsive
};
