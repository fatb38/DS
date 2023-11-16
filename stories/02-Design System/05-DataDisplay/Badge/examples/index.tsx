import Basic from './basic';
import Standalone from './standalone';
import OverflowCount from './overflowCount';
import RedBadge from './redBadge';
import Dynamic from './dynamic';
import CountColor from './countColor';
import Status from './status';

import BasicSource from './basic?raw';
import StandaloneSource from './standalone?raw';
import OverflowCountSource from './overflowCount?raw';
import RedBadgeSource from './redBadge?raw';
import DynamicSource from './dynamic?raw';
import CountColorSource from './countColor?raw';
import StatusSource from './status?raw';

export const Sources = {
    Basic: BasicSource,
    Standalone: StandaloneSource,
    OverflowCount: OverflowCountSource,
    RedBadge: RedBadgeSource,
    Dynamic: DynamicSource,
    CountColor: CountColorSource,
    Status: StatusSource
};

export default {
    Basic,
    Standalone,
    OverflowCount,
    RedBadge,
    Dynamic,
    CountColor,
    Status
};
