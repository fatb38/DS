import type {Meta, StoryObj} from '@storybook/react';
import {KitBadge} from '@kit/DataDisplay';
import {argTypes} from './data';
import React from 'react';
import {Template} from './Template';
import {BasicBadgeTest} from './test-components/BasicBadgeTest.tsx';
import {ColoredBadgeTest} from './test-components/ColoredBadgeTest.tsx';

const meta: Meta<typeof KitBadge> = {
    component: KitBadge,
    title: 'Design System/DataDisplay/Badge',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitBadge>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <div>
            <BasicBadgeTest />
            <ColoredBadgeTest />
        </div>
    )
};
