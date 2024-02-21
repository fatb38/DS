import React, {FunctionComponent, useMemo} from 'react';
import {Breadcrumb} from 'antd';
import {IKitBreadcrumb, IKitBreadcrumbItem} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';

import styles from './styles.module.scss';
import {ItemType} from 'antd/lib/breadcrumb/Breadcrumb';

const formatItemsForAntd = (items?: IKitBreadcrumbItem[]): ItemType[] | undefined => {
    if (items === undefined) {
        return;
    }

    return items.map(item => {
        const {icon, ...antItem} = item;
        if (icon) {
            return {
                ...antItem,
                title: (
                    <>
                        {icon}
                        {antItem.title && <span style={{marginLeft: '4px'}}>{antItem.title}</span>}
                    </>
                )
            };
        }
        return antItem;
    });
};

export const KitBreadcrumb: FunctionComponent<IKitBreadcrumb> = ({className, items, ...props}) => {
    const {appId} = useKitTheme();
    const clx = cn(appId, styles['kit-breadcrumb'], className);

    const itemsFormattedForAntd = useMemo(() => formatItemsForAntd(items), [items]);

    return <Breadcrumb {...props} className={clx} items={itemsFormattedForAntd} />;
};

KitBreadcrumb.displayName = 'KitBreadcrumb';
