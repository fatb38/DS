import {FunctionComponent} from 'react';
import {
    KitAvatarSkeletonProps,
    KitCustomSkeletonProps,
    KitInputSkeletonProps,
    KitItemCardSkeletonProps,
    KitItemListSkeletonProps
} from './types';
import {KitItemListSkeleton} from './KitItemListSkeleton';
import {KitItemCardSkeleton} from './KitItemCard';
import {KitAvatarSkeleton} from './KitAvatarSkeleton';
import {KitCustomSkeleton} from './KitCustomSkeleton';
import {KitInputSkeleton} from './KitInputSkeleton';

type CompoundedComponent = {
    KitAvatarSkeleton: FunctionComponent<KitAvatarSkeletonProps>;
    KitCustomSkeleton: FunctionComponent<KitCustomSkeletonProps>;
    KitInputSkeleton: FunctionComponent<KitInputSkeletonProps>;
    KitItemCardSkeleton: FunctionComponent<KitItemCardSkeletonProps>;
    KitItemListSkeleton: FunctionComponent<KitItemListSkeletonProps>;
    displayName: 'KitSkeleton';
};

export const KitSkeleton: CompoundedComponent = {
    KitAvatarSkeleton,
    KitCustomSkeleton,
    KitInputSkeleton,
    KitItemCardSkeleton,
    KitItemListSkeleton,
    displayName: 'KitSkeleton'
};
