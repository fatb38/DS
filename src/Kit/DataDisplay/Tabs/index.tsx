import {FunctionComponent} from 'react';
import {Tabs as AntTabs} from 'antd';
import {IKitTabs} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';

import styles from './styles.module.scss';

const KitTabs: FunctionComponent<IKitTabs> = ({className, popupClassName, hideSeparator = false, ...tabsProps}) => {
    const {appId} = useKitTheme();

    const clx = cn(appId, styles['kit-tabs'], className, {'hide-separator': hideSeparator});
    const popupClx = cn(appId, popupClassName);

    return <AntTabs className={clx} popupClassName={popupClx} {...tabsProps} />;
};

export {KitTabs};

KitTabs.displayName = 'KitTabs';
