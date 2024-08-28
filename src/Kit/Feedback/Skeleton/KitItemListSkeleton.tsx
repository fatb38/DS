import {FunctionComponent} from 'react';
import {type KitItemListSkeletonProps} from './types';
import styles from './styles.module.scss';
import cn from 'classnames';

export const KitItemListSkeleton: FunctionComponent<KitItemListSkeletonProps> = ({className, style, active = true}) => (
    <div
        style={style}
        className={cn(styles['kit-skeleton-item-list'], styles['kit-skeleton'], className, {
            [styles['kit-skeleton-active']]: active
        })}
    />
);
