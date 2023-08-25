import Basic from './basic';
import Type from './type';
import Color from './color';
import Group from './group';
import Badge from './badge';
import Responsive from './responsive';

import BasicSource from './basic?raw';
import TypeSource from './type?raw';
import ColorSource from './color?raw';
import GroupSource from './group?raw';
import BadgeSource from './badge?raw';
import ResponsiveSource from './responsive?raw';

export const Sources = {
    Basic: BasicSource,
    Type: TypeSource,
    Color: ColorSource,
    Group: GroupSource,
    Badge: BadgeSource,
    Responsive: ResponsiveSource
};
export default {
    Basic,
    Type,
    Color,
    Group,
    Badge,
    Responsive
};
