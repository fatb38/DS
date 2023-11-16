import React from 'react';
import {Tour} from 'antd';
import {FunctionComponent} from 'react';
import {IKitTour} from './types';

export const KitTour: FunctionComponent<IKitTour> = ({...tourProps}) => {
    return <Tour {...tourProps} />;
};
