import React, {FunctionComponent} from 'react';
import {Breadcrumb} from 'antd';
import {IKitBreadcrumb} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';

import styles from './styles.module.scss';

export const KitBreadcrumb: FunctionComponent<IKitBreadcrumb> = ({className, ...props}) => {
    const {appId} = useKitTheme();
    const clx = cn(appId, styles['kit-breadcrumb'], className);

    return <Breadcrumb {...props} className={clx} />;
};

KitBreadcrumb.displayName = 'KitBreadcrumb';
