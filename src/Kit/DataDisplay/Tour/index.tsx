import React from 'react';
import {Tour} from 'antd';
import {FunctionComponent} from 'react';
import {IKitTour} from './types';
import {useKitTheme} from '@theme/useKitTheme';

export const KitTour: FunctionComponent<IKitTour> = ({rootClassName, ...tourProps}) => {
    const {appId} = useKitTheme();
    return <Tour {...tourProps} rootClassName={`${appId} ${rootClassName}`} />;
};
