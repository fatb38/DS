import Basic from './basic';
import Scroll from './scroll';
import Fullscreen from './fullscreen';
import Confirm from './confirm';
import BasicSource from './basic?raw';
import ScrollSource from './scroll?raw';
import FullscreenSource from './fullscreen?raw';
import ConfirmSource from './confirmSource?raw';

export const Sources = {
    Basic: BasicSource,
    Scroll: ScrollSource,
    Fullscreen: FullscreenSource,
    Confirm: ConfirmSource
};

export default {
    Basic,
    Scroll,
    Fullscreen,
    Confirm
};
