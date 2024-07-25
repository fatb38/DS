import Horizontal from './horizontal';
import Vertical from './vertical';
import NoMargin from './noMargin';
import WithTitle from './withTitle';

import HorizontalSource from './horizontal?raw';
import VerticalSource from './vertical?raw';
import NoMarginSource from './noMargin?raw';
import WithTitleSource from './withTitle?raw';

export const Sources = {
    Horizontal: HorizontalSource,
    Vertical: VerticalSource,
    NoMargin: NoMarginSource,
    WithTitle: WithTitleSource
};

export default {
    Horizontal,
    Vertical,
    NoMargin,
    WithTitle
};
