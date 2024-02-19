import React from 'react';
import {Tour} from 'antd';
import {FunctionComponent} from 'react';
import {IKitTour} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';

export const KitTour: FunctionComponent<IKitTour> = ({rootClassName, ...tourProps}) => {
    const {appId} = useKitTheme();

    const clx = cn(appId, rootClassName);
    return <Tour {...tourProps} rootClassName={clx} />;
};
