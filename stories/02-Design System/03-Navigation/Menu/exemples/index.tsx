import Basic from './basic';
import Type from './type';
import Selectable from './selectable';
import Actions from './actions';
import Value from './value';
import Rafter from './rafter';
import All from './all';

import BasicSource from './basic?raw';
import TypeSource from './type?raw';
import SelectableSource from './selectable?raw';
import ActionsSource from './actions?raw';
import ValueSource from './value?raw';
import RafterSource from './rafter?raw';
import AllSource from './all?raw';

export const Sources = {
    Basic: BasicSource,
    Type: TypeSource,
    Selectable: SelectableSource,
    Actions: ActionsSource,
    Value: ValueSource,
    Rafter: RafterSource,
    All: AllSource
};

export default {
    Basic,
    Type,
    Selectable,
    Actions,
    Value,
    Rafter,
    All
};
