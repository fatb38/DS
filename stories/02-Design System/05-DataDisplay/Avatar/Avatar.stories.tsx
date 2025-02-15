import type {Meta, StoryObj} from '@storybook/react';
import {KitAvatar} from '@kit/DataDisplay';
import {argTypes} from './data';
import React from 'react';
import {Template} from './Template';
import {BasicAndTypeAvatarTest} from './test-components/BasicAndTypeAvatarTest.tsx';
import {ColoredAvatarTest} from './test-components/ColoredAvatarTest.tsx';
import {GroupAndBadgeAvatarTest} from './test-components/GroupAndBadgeAvatarTest.tsx';
import {ImageFitTest} from './test-components/ImageFitTest.tsx';
import {DisabledAvatarTest} from './test-components/DisabledAvatarTest.tsx';

const meta: Meta<typeof KitAvatar> = {
    component: KitAvatar,
    title: 'Design System/DataDisplay/Avatar',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitAvatar>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <div>
            <div style={{display: 'flex', gap: '100px'}}>
                <BasicAndTypeAvatarTest />
                <ColoredAvatarTest />
                <GroupAndBadgeAvatarTest />
                <ImageFitTest />
                <DisabledAvatarTest />
            </div>
        </div>
    )
};
