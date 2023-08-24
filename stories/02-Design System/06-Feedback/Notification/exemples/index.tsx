import Basic from './basic';
import Icon from './icon';
import CustomIcon from './customIcon';
import Duration from './duration';
import CustomClose from './customClose';
import Placement from './placement';
import UpdateMessage from './updateMessage';

import BasicSource from './basic?raw';
import IconSource from './icon?raw';
import CustomIconSource from './customIcon?raw';
import DurationSource from './duration?raw';
import CustomCloseSource from './customClose?raw';
import PlacementSource from './placement?raw';
import UpdateMessageSource from './updateMessage?raw';

export const Sources = {
    Basic: BasicSource,
    Icon: IconSource,
    CustomIcon: CustomIconSource,
    Duration: DurationSource,
    CustomClose: CustomCloseSource,
    Placement: PlacementSource,
    UpdateMessage: UpdateMessageSource
};

export default {
    Basic,
    Icon,
    CustomIcon,
    Duration,
    CustomClose,
    Placement,
    UpdateMessage
};
