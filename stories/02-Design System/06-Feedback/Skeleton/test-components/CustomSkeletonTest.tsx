import {KitSkeleton} from '@kit/Feedback';
import {KitTypography} from '@kit/General';
import {FunctionComponent} from 'react';

const {KitCustomSkeleton} = KitSkeleton;

export const CustomSkeletonTest: FunctionComponent = () => (
    <div style={{display: 'flex', flexDirection: 'column', width: '1024px'}}>
        <KitTypography.Title level="h3">Custom Skeleton</KitTypography.Title>
        <div style={{display: 'flex', flexDirection: 'column', width: '100%', gap: '8px'}}>
            <KitCustomSkeleton active={false} style={{width: '100%', height: '60px'}} />
            <KitCustomSkeleton active={false} style={{width: '100px', height: '100px'}} />
        </div>
    </div>
);
