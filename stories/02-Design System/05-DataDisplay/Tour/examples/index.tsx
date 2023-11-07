import Basic from './basic';
import NoModal from './noModal';
import Placement from './placement';
import CustomMask from './customMask';
import CustomIndicator from './customIndicator';

import BasicSource from './basic?raw';
import NoModalSource from './noModal?raw';
import PlacementSource from './placement?raw';
import CustomMaskSource from './customMask?raw';
import CustomIndicatorSource from './customIndicator?raw';

export const Sources = {
    Basic: BasicSource,
    NoModal: NoModalSource,
    Placement: PlacementSource,
    CustomMask: CustomMaskSource,
    CustomIndicator: CustomIndicatorSource
};

export default {
    Basic,
    NoModal,
    Placement,
    CustomMask,
    CustomIndicator
};
