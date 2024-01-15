import type {Meta, StoryObj} from '@storybook/react';
import {KitTree} from '@kit/DataDisplay';
import {argTypes} from './data';
import React from 'react';
import {Template} from './Template';
import {BasicTreeTest} from './test-components/BasicTreeTest.tsx';
import {CustomIconTreeTest} from './test-components/CustomIconTreeTest.tsx';
import {LineTreeTest} from './test-components/LineTreeTest.tsx';

const meta: Meta<typeof KitTree> = {
    component: KitTree,
    title: 'Design System/DataDisplay/Tree',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitTree>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '100px'}}>
            <BasicTreeTest />
            <CustomIconTreeTest />
            <LineTreeTest />
        </div>
    )
};
