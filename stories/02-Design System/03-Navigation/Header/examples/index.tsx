import Basic from './basic';
import Title from './title';
import Search from './search';
import Breadcrumb from './breadcrumb';
import PlusAction from './plusAction';
import Actions from './actions';
import All from './all';

import BasicSource from './basic?raw';
import TitleSource from './title?raw';
import SearchSource from './search?raw';
import BreadcrumbSource from './breadcrumb?raw';
import PlusActionSource from './plusAction?raw';
import ActionsSource from './actions?raw';
import AllSource from './all?raw';

export const Sources = {
    Basic: BasicSource,
    Title: TitleSource,
    Search: SearchSource,
    Breadcrumb: BreadcrumbSource,
    PlusAction: PlusActionSource,
    Actions: ActionsSource,
    All: AllSource
};

export default {
    Basic,
    Title,
    Search,
    Breadcrumb,
    PlusAction,
    Actions,
    All
};
