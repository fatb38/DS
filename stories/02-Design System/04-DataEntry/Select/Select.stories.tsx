import type {Meta, StoryObj} from '@storybook/react';
import {KitSelect} from '@kit/DataEntry';
import {argTypes} from './data';
import React from 'react';
import {Template} from './Template';
import {BasicSelectTest} from './test-components/BasicSelectTest.tsx';
import {IconAndColorSelectTest} from './test-components/IconAndColorSelectTest.tsx';
import {GroupSelectTest} from './test-components/GroupSelectTest.tsx';
import {StatusAndLabelSelectTest} from './test-components/StatusAndLabelSelectTest.tsx';
import {MultilinesSelectTest} from './test-components/MultilinesSelectTest.tsx';

const meta: Meta<typeof KitSelect> = {
    component: KitSelect,
    title: 'Design System/DataEntry/Select',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitSelect>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <div style={{display: 'flex', gap: '20px'}}>
                <BasicSelectTest />
                <GroupSelectTest />
            </div>
            <IconAndColorSelectTest />
            <StatusAndLabelSelectTest />
            <MultilinesSelectTest />
        </div>
    )
};
