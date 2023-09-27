import Basic from './basic';
import WithImage from './withImage';
import WithContent from './withContent';
import Disabled from './disabled';
import Separator from './separator';
import Link from './link';
import Actions from './actions';
import Extra from './extra';

import BasicSource from './basic?raw';
import WithImageSource from './withImage?raw';
import WithContentSource from './withContent?raw';
import DisabledSource from './disabled?raw';
import SeparatorSource from './separator?raw';
import LinkSource from './link?raw';
import ActionsSource from './actions?raw';
import ExtraSource from './extra?raw';

export const Sources = {
    Basic: BasicSource,
    WithImage: WithImageSource,
    WithContent: WithContentSource,
    Disabled: DisabledSource,
    Separator: SeparatorSource,
    Link: LinkSource,
    Actions: ActionsSource,
    Extra: ExtraSource
};

export default {
    Basic,
    WithImage,
    WithContent,
    Disabled,
    Separator,
    Link,
    Actions,
    Extra
};
