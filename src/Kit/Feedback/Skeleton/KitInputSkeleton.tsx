import {FunctionComponent} from 'react';
import {type KitInputSkeletonProps} from './types';
import styles from './styles.module.scss';
import cn from 'classnames';

export const KitInputSkeleton: FunctionComponent<KitInputSkeletonProps> = ({className, style, active = true}) => (
    <div
        style={style}
        className={cn(styles['kit-skeleton-input'], styles['kit-skeleton'], className, {
            [styles['kit-skeleton-active']]: active
        })}
    />
);
