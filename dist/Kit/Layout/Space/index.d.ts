import { FunctionComponent } from 'react';
import type { IKitSpace } from './types';
import { SpaceCompactProps } from 'antd/lib/space/Compact';
type CompoundedComponent = FunctionComponent<IKitSpace> & {
    Compact: FunctionComponent<SpaceCompactProps>;
};
export declare const KitSpace: CompoundedComponent;
export {};
