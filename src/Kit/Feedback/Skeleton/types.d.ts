import {CSSProperties} from 'react';

type KitSkeletonProps = {
    style?: CSSProperties;
    className?: string;
    active?: boolean;
};

export type KitCustomSkeletonProps = KitSkeletonProps;

export type KitItemListSkeletonProps = KitSkeletonProps;
export type KitItemCardSkeletonProps = KitSkeletonProps & {
    display?: 'card' | 'list';
};

export type KitAvatarSkeletonProps = KitSkeletonProps & {
    size?: 'small' | 'medium' | 'large' | number;
    shape?: 'circle' | 'square';
};

export type KitInputSkeletonProps = KitSkeletonProps;
