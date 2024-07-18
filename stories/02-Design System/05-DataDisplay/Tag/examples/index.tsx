import Basic from './basic';
import Clickable from './clickable';
import Disabled from './disabled';
import Group from './group';
import IdCard from './idCard';
import Type from './type';

import BasicSource from './basic?raw';
import ClickableSource from './clickable?raw';
import DisabledSource from './disabled?raw';
import GroupSource from './group?raw';
import IdCardSource from './idCard?raw';
import TypeSource from './type?raw';

export const Sources = {
    Basic: BasicSource,
    Clickable: ClickableSource,
    Disabled: DisabledSource,
    Group: GroupSource,
    IdCard: IdCardSource,
    Type: TypeSource
};
export default {
    Basic,
    Clickable,
    Disabled,
    Group,
    IdCard,
    Type
};
