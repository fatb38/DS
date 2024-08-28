import {KitSkeleton} from '@kit/Feedback';
import {KitTypography} from '@kit/General';
import {FunctionComponent} from 'react';

const {KitItemCardSkeleton} = KitSkeleton;

export const ItemCardSkeletonTest: FunctionComponent = () => (
    <div style={{display: 'flex', flexDirection: 'column', width: '1024px'}}>
        <KitTypography.Title level="h3">ItemCard Skeleton</KitTypography.Title>
        <KitItemCardSkeleton active={false} style={{marginBottom: '8px'}} />
        <KitItemCardSkeleton active={false} display="list" />
    </div>
);
