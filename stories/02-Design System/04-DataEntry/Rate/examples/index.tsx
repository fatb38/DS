import Basic from './basic';
import Half from './half';
import Copywriting from './copywriting';
import Readonly from './readonly';
import Allowclear from './allowclear';
import Color from './color';
import Otherchar from './otherchar';

import BasicSource from './basic?raw';
import HalfSource from './half?raw';
import CopywritingSource from './copywriting?raw';
import ReadonlySource from './readonly?raw';
import AllowclearSource from './allowclear?raw';
import ColorSource from './color?raw';
import OthercharSource from './otherchar?raw';

export const Sources = {
    Basic: BasicSource,
    Half: HalfSource,
    Copywriting: CopywritingSource,
    Readonly: ReadonlySource,
    Allowclear: AllowclearSource,
    Color: ColorSource,
    Otherchar: OthercharSource
};
export default {
    Basic,
    Half,
    Copywriting,
    Readonly,
    Allowclear,
    Color,
    Otherchar
};
