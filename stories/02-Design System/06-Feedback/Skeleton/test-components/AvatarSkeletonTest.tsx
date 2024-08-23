import {KitSkeleton} from '@kit/Feedback';
import {KitTypography} from '@kit/General';
import {FunctionComponent} from 'react';

const {KitAvatarSkeleton} = KitSkeleton;

export const AvatarSkeletonTest: FunctionComponent = () => (
    <div style={{display: 'flex', flexDirection: 'column', width: '1024px'}}>
        <KitTypography.Title level="h3">Avatar Skeleton</KitTypography.Title>
        <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
            <KitAvatarSkeleton active={false} size="small" />
            <KitAvatarSkeleton active={false} />
            <KitAvatarSkeleton active={false} size="large" />
            <KitAvatarSkeleton active={false} size={64} />
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <KitAvatarSkeleton active={false} shape="square" size="small" />
            <KitAvatarSkeleton active={false} shape="square" />
            <KitAvatarSkeleton active={false} shape="square" size="large" />
            <KitAvatarSkeleton active={false} shape="square" size={64} />
        </div>
    </div>
);
