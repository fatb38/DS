import React, {FunctionComponent} from 'react';
import {Tabs as AntTabs} from 'antd';
import {IKitTabs} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';

import styles from './styles.module.scss';

const KitTabs: FunctionComponent<IKitTabs> = ({className, popupClassName, ...tabsProps}) => {
    const {appId} = useKitTheme();

    const clx = cn(appId, styles['kit-tabs'], className);

    return <AntTabs className={clx} popupClassName={`${appId} ${popupClassName ?? ''}`} {...tabsProps} />;
};

export {KitTabs};

KitTabs.displayName = 'KitTabs';
