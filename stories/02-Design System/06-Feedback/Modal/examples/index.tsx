import Basic from './basic';
import Fullscreen from './fullscreen';
import Confirm from './confirm';
import BasicSource from './basic?raw';
import FullscreenSource from './fullscreen?raw';
import ConfirmSource from './confirmSource?raw';

export const Sources = {
    Basic: BasicSource,
    Fullscreen: FullscreenSource,
    Confirm: ConfirmSource
};

export default {
    Basic,
    Fullscreen,
    Confirm
};
