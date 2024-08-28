import {Grid} from './Grid';
import InternalCol from './Col';
import InternalRow from './Row';
import {KitGridCompoundedComponent} from './types';

export const KitGrid = Grid as KitGridCompoundedComponent;
KitGrid.Row = InternalRow;
KitGrid.Col = InternalCol;

KitGrid.displayName = 'KitGrid';
