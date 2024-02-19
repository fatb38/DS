import React, {FunctionComponent} from 'react';
import {Progress} from 'antd';
import {IKitProgress} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';

import styles from './styles.module.scss';

export const KitProgress: FunctionComponent<IKitProgress> = ({className, ...progressProps}) => {
    const {appId} = useKitTheme();
    const clx = cn(appId, styles['kit-progress'], className);

    return <Progress {...progressProps} className={clx} />;
};
KitProgress.displayName = 'KitProgress';
