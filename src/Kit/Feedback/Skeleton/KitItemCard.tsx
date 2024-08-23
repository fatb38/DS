import {FunctionComponent} from 'react';
import {type KitItemCardSkeletonProps} from './types';
import styles from './styles.module.scss';
import cn from 'classnames';

export const KitItemCardSkeleton: FunctionComponent<KitItemCardSkeletonProps> = ({
    className,
    style,
    display = 'card',
    active = true
}) => (
    <div
        style={style}
        className={cn(styles['kit-skeleton'], className, {
            [styles['kit-skeleton-active']]: active,
            [styles['kit-skeleton-item-card']]: display === 'card',
            [styles['kit-skeleton-item-card-list']]: display === 'list'
        })}
    />
);
