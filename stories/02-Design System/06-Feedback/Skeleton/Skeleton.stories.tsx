import {KitSkeleton} from '@kit/Feedback';
import {argTypes} from './data';
import {Meta} from '@storybook/react';
import {Template} from './Template';
import {CustomSkeletonTest} from './test-components/CustomSkeletonTest';
import {AvatarSkeletonTest} from './test-components/AvatarSkeletonTest';
import {InputSkeletonTest} from './test-components/InputSkeletonTest';
import {ItemCardSkeletonTest} from './test-components/ItemCardSkeletonTest';
import {ItemListSkeletonTest} from './test-components/ItemListSkeletonTest';

const {KitItemListSkeleton} = KitSkeleton;

const meta: Meta<typeof KitItemListSkeleton> = {
    component: KitItemListSkeleton,
    title: 'Design System/Feedback/Skeleton',
    argTypes
};

export default meta;

export const Api = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest = {
    render: () => (
        <>
            <CustomSkeletonTest />
            <AvatarSkeletonTest />
            <InputSkeletonTest />
            <ItemCardSkeletonTest />
            <ItemListSkeletonTest />
        </>
    )
};
