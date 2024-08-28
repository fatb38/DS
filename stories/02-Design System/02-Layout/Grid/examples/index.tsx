import Basic from './basic';
import Row from './row';
import Col from './col';
import Grid from './grid';
import GridMenu from './gridMenu';

import BasicSource from './basic?raw';
import RowSource from './row?raw';
import ColSource from './col?raw';
import GridSource from './grid?raw';
import GridMenuSource from './gridMenu?raw';

export const Sources = {
    Basic: BasicSource,
    Row: RowSource,
    Col: ColSource,
    Grid: GridSource,
    GridMenu: GridMenuSource
};

export default {
    Basic,
    Row,
    Col,
    Grid,
    GridMenu
};
