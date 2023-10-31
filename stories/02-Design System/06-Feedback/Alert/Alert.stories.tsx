import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {KitAlert} from '@kit/Feedback';
import {argTypes, Template} from './data';

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
        <>
            <KitAlert type="success" message="Success Text" />
            <br />
            <KitAlert type="info" message="Info Text" />
            <br />
            <KitAlert type="warning" message="Warning Text" />
            <br />
            <KitAlert type="error" message="Error Text" />
            <br/>
            <KitAlert type="success" message="Success Text" showIcon/>
            <br />
            <KitAlert type="info" message="Info Text" showIcon/>
            <br />
            <KitAlert type="warning" message="Warning Text" showIcon/>
            <br />
            <KitAlert type="error" message="Error Text" showIcon/>
        </>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Description: Story = {
    render: () => (
        <>
            <KitAlert
                type="success"
                message="Success Text"
                description="Success Description Success Description Success Description"
            />
            <br />
            <KitAlert
                type="info"
                message="Info Text"
                description="Info Description Info Description Info Description Info Description"
            />
            <br />
            <KitAlert
                type="warning"
                message="Warning Text"
                description="Warning Description Warning Description Warning Description Warning Description"
            />
            <br />
            <KitAlert
                type="error"
                message="Error Text"
                description="Error Description Error Description Error Description Error Description"
            />
            <br/>
            <KitAlert
                type="success"
                message="Success Text"
                description="Success Description Success Description Success Description"
                showIcon
            />
            <br />
            <KitAlert
                type="info"
                message="Info Text"
                description="Info Description Info Description Info Description Info Description"
                showIcon
            />
            <br />
            <KitAlert
                type="warning"
                message="Warning Text"
                description="Warning Description Warning Description Warning Description Warning Description"
                showIcon
            />
            <br />
            <KitAlert
                type="error"
                message="Error Text"
                description="Error Description Error Description Error Description Error Description"
                showIcon
            />
        </>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Banner: Story = {
    render: () => (
        <>
            <KitAlert type="success" message="Success Text" banner/>
            <br />
            <KitAlert type="info" message="Info Text" banner/>
            <br />
            <KitAlert type="warning" message="Warning Text" banner/>
            <br />
            <KitAlert type="error" message="Error Text" banner/>
        </>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};