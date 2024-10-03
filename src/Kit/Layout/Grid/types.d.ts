import {RowProps, ColProps} from 'antd';
import {FunctionComponent} from 'react';

export interface IKitRow extends RowProps {}

export interface IKitCol extends ColProps {}

export type KitGridCompoundedComponent = {
    KitRow: FunctionComponent<IKitRow>;
    KitCol: FunctionComponent<IKitCol>;
    displayName?: string;
};
