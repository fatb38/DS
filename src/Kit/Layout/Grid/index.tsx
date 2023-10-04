import InternalRow from './Row';
import InternalCol from './Col';
import {IKitCol, IKitRow} from './types';
import {FunctionComponent} from 'react';

type CompoundedComponent = {
    Row: FunctionComponent<IKitRow>;
    Col: FunctionComponent<IKitCol>;
    displayName?: string;
};

export const KitGrid = {
    Row: InternalRow,
    Col: InternalCol
} as unknown as CompoundedComponent;

KitGrid.displayName = 'KitGrid';
