import React from 'react';
import type { KitSpaceProps } from './types';
import { SpaceCompactProps } from 'antd/lib/space/Compact';
type CompoundedComponent = React.FunctionComponent<KitSpaceProps> & {
    Compact: React.FunctionComponent<SpaceCompactProps>;
};
export declare const KitSpace: CompoundedComponent;
export {};
