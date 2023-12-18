import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {KitAlert} from '@kit/Feedback';
import {Template} from './Template';
import {argTypes} from './data';

const meta: Meta<typeof KitAlert> = {
    component: KitAlert,
    title: 'Design System/Feedback/Alert',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitAlert>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const Types: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <KitAlert type="success" message="Success Text" />
            <KitAlert type="info" message="Info Text" />
            <KitAlert type="warning" message="Warning Text" />
            <KitAlert type="error" message="Error Text" />
            <KitAlert type="success" message="Success Text" showIcon />
            <KitAlert type="info" message="Info Text" showIcon />
            <KitAlert type="warning" message="Warning Text" showIcon />
            <KitAlert type="error" message="Error Text" showIcon />
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Description: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <KitAlert
                type="success"
                message="Success Text"
                description="Success Description Success Description Success Description"
            />
            <KitAlert
                type="info"
                message="Info Text"
                description="Info Description Info Description Info Description Info Description"
            />
            <KitAlert
                type="warning"
                message="Warning Text"
                description="Warning Description Warning Description Warning Description Warning Description"
            />
            <KitAlert
                type="error"
                message="Error Text"
                description="Error Description Error Description Error Description Error Description"
            />
            <KitAlert
                type="success"
                message="Success Text"
                description="Success Description Success Description Success Description"
                showIcon
            />
            <KitAlert
                type="info"
                message="Info Text"
                description="Info Description Info Description Info Description Info Description"
                showIcon
            />
            <KitAlert
                type="warning"
                message="Warning Text"
                description="Warning Description Warning Description Warning Description Warning Description"
                showIcon
            />
            <KitAlert
                type="error"
                message="Error Text"
                description="Error Description Error Description Error Description Error Description"
                showIcon
            />
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Banner: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <KitAlert type="success" message="Success Text" banner />
            <KitAlert type="info" message="Info Text" banner />
            <KitAlert type="warning" message="Warning Text" banner />
            <KitAlert type="error" message="Error Text" banner />
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
