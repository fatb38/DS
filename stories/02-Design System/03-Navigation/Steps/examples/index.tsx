import Basic from './basic';
import SwitchStep from './switchStep';
import Vertical from './vertical';
import Status from './status';
import Clickable from './clickable';

import BasicSource from './basic?raw';
import SwitchStepSource from './switchStep?raw';
import VerticalSource from './vertical?raw';
import StatusSource from './status?raw';
import ClickableSource from './clickable?raw';

export const Sources = {
    Basic: BasicSource,
    SwitchStep: SwitchStepSource,
    Vertical: VerticalSource,
    Status: StatusSource,
    Clickable: ClickableSource
};

export default {
    Basic,
    SwitchStep,
    Vertical,
    Status,
    Clickable
};
