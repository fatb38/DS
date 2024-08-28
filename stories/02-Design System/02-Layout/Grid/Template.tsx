import React from 'react';
import {KitGrid} from '@kit/Layout/';
import {IKitCol, IKitRow} from '@kit/Layout/Grid/types';

interface IFakeGrid extends IKitRow, IKitCol {}

export const FakeGrid: React.FunctionComponent<IFakeGrid> = () => null;

export const Template = () => <KitGrid.Row></KitGrid.Row>;
