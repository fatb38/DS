import Basic from './basic';
import Disabled from './disabled';
import Precision from './precision';
import Keyboard from './keyboard';
import Prefix from './prefix';
import Formatter from './formatter';
import Outrange from './outrange';
import Status from './status';
import Wrapper from './wrapper';

import BasicSource from './basic?raw';
import DisabledSource from './disabled?raw';
import PrecisionSource from './precision?raw';
import KeyboardSource from './keyboard?raw';
import PrefixSource from './prefix?raw';
import FormatterSource from './formatter?raw';
import OutrangeSource from './outrange?raw';
import StatusSource from './status?raw';
import WrapperSource from './wrapper?raw';

export const Sources = {
    Basic: BasicSource,
    Disabled: DisabledSource,
    Precision: PrecisionSource,
    Keyboard: KeyboardSource,
    Prefix: PrefixSource,
    Formatter: FormatterSource,
    Outrange: OutrangeSource,
    Status: StatusSource,
    Wrapper: WrapperSource
};
export default {
    Basic,
    Disabled,
    Precision,
    Keyboard,
    Prefix,
    Formatter,
    Outrange,
    Status,
    Wrapper
};
