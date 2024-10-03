import Basic from './basic';
import CharacterCount from './characterCount';
import Disabled from './disabled';
import Status from './status';
import ReadOnly from './readOnly';
import SetValue from './setValue';
import Wrapper from './wrapper';

import BasicSource from './basic?raw';
import CharacterCountSource from './characterCount?raw';
import DisabledSource from './disabled?raw';
import StatusSource from './status?raw';
import ReadOnlySource from './readOnly?raw';
import SetValueSource from './setValue?raw';
import WrapperSource from './wrapper?raw';

export const Sources = {
    Basic: BasicSource,
    CharacterCount: CharacterCountSource,
    Disabled: DisabledSource,
    Status: StatusSource,
    ReadOnly: ReadOnlySource,
    SetValue: SetValueSource,
    Wrapper: WrapperSource
};
export default {
    Basic,
    CharacterCount,
    Disabled,
    Status,
    ReadOnly,
    SetValue,
    Wrapper
};
