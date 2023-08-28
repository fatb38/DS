import Basic from './basic';
import PicturesWall from './picturesWall';
import DefaultFiles from './defaultFiles';
import ListStyle from './listStyle';
import DragNDrop from './dragNDrop';

import BasicSource from './basic?raw';
import PicturesWallSource from './picturesWall?raw';
import DefaultFilesSource from './defaultFiles?raw';
import ListStyleSource from './listStyle?raw';
import DragNDropSource from './dragNDrop?raw';

export const Sources = {
    Basic: BasicSource,
    PicturesWall: PicturesWallSource,
    DefaultFiles: DefaultFilesSource,
    ListStyle: ListStyleSource,
    DragNDrop: DragNDropSource
};
export default {
    Basic,
    PicturesWall,
    DefaultFiles,
    ListStyle,
    DragNDrop
};
