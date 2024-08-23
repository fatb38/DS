import {FunctionComponent} from 'react';
import {type KitAvatarSkeletonProps} from './types';
import styles from './styles.module.scss';
import cn from 'classnames';

const _getSize = (size: number | 'small' | 'medium' | 'large') => {
    if (size === 'small') return 'var(--general-spacing-m)';
    if (size === 'medium') return 'var(--general-spacing-l)';
    if (size === 'large') return 'var(--general-spacing-xl)';
    if (typeof size === 'number') return size;
};

export const KitAvatarSkeleton: FunctionComponent<KitAvatarSkeletonProps> = ({
    className,
    style,
    size = 'medium',
    shape = 'circle',
    active = true
}) => {
    const computedSize = _getSize(size);

    return (
        <div
            style={{width: `calc(${computedSize} * 1px)`, height: `calc(${computedSize} * 1px)`, ...style}}
            className={cn(styles['kit-skeleton'], className, {
                [styles['kit-skeleton-active']]: active,
                [styles['kit-avatar-circle']]: shape === 'circle',
                [styles['kit-avatar-square']]: shape === 'square'
            })}
        />
    );
};
