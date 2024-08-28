import {KitSkeleton} from '@kit/Feedback';
import {KitTypography} from '@kit/General';
import {FunctionComponent} from 'react';

const {KitItemListSkeleton} = KitSkeleton;

export const ItemListSkeletonTest: FunctionComponent = () => (
    <div style={{display: 'flex', flexDirection: 'column', width: '1024px'}}>
        <KitTypography.Title level="h3">ItemList Skeleton</KitTypography.Title>
        <KitItemListSkeleton active={false} />
    </div>
);
