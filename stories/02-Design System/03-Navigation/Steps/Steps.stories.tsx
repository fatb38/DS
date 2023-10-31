import type {Meta, StoryObj} from '@storybook/react';
import {KitSteps} from '@kit/Navigation';
import {argTypes, Template} from './data';
import React from 'react';

const meta: Meta<typeof KitSteps> = {
    component: KitSteps,
    title: 'Design System/Navigation/Steps',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitSteps>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const Basic: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '40px'}}>
            <KitSteps
                current={1}
                items={[
                    {
                        title: 'Finished',
                        description: 'This is a description'
                    },
                    {
                        title: 'In Progress',
                        description: 'This is a description'
                    },
                    {
                        title: 'Waiting',
                        description: 'This is a description'
                    }
                ]}
            />
            <KitSteps
                current={1}
                status="error"
                items={[
                    {
                        title: 'Finished',
                        description: 'This is a description'
                    },
                    {
                        title: 'In Progress',
                        description: 'This is a description'
                    },
                    {
                        title: 'Waiting',
                        description: 'This is a description'
                    }
                ]}
            />
            <KitSteps
                direction="vertical"
                current={1}
                items={[
                    {
                        title: 'Finished',
                        description: 'This is a description'
                    },
                    {
                        title: 'In Progress',
                        description: 'This is a description'
                    },
                    {
                        title: 'Waiting',
                        description: 'This is a description'
                    }
                ]}
            />
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Clickable: Story = {
    render: () => (
        <KitSteps
            current={0}
            onChange={() => console.log('onChange')}
            items={[
                {
                    title: 'Step 1',
                    description: 'This is a description'
                },
                {
                    title: 'Step 2',
                    description: 'This is a description'
                },
                {
                    title: 'Step 3',
                    description: 'This is a description'
                }
            ]}
        />
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
