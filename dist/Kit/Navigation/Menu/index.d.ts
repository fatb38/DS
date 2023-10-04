import { IKitItemMenu, IKitMenu } from './types';
import { FunctionComponent } from 'react';
type CompoundedComponent = FunctionComponent<IKitMenu> & {
    Item: FunctionComponent<IKitItemMenu>;
};
export declare const KitMenu: CompoundedComponent;
export {};
