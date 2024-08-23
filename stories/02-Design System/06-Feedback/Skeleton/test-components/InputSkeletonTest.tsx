import {KitSkeleton} from '@kit/Feedback';
import {KitTypography} from '@kit/General';
import {FunctionComponent} from 'react';

const {KitInputSkeleton} = KitSkeleton;

export const InputSkeletonTest: FunctionComponent = () => (
    <div style={{display: 'flex', flexDirection: 'column', width: '1024px'}}>
        <KitTypography.Title level="h3">Input Skeleton</KitTypography.Title>
        <KitInputSkeleton active={false} />
    </div>
);
