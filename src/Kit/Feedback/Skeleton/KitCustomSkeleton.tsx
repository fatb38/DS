import {FunctionComponent} from 'react';
import {type KitCustomSkeletonProps} from './types';
import styles from './styles.module.scss';
import cn from 'classnames';

export const KitCustomSkeleton: FunctionComponent<KitCustomSkeletonProps> = ({className, style, active = true}) => (
    <div style={style} className={cn(styles['kit-skeleton'], className, {[styles['kit-skeleton-active']]: active})} />
);
