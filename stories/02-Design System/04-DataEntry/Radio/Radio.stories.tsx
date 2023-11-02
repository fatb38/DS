import type {Meta, StoryObj} from '@storybook/react';
import {KitRadio} from '@kit/DataEntry';
import {argTypes, Template} from './data';
import React from 'react';

const meta: Meta<typeof KitRadio> = {
    component: KitRadio,
    title: 'Design System/DataEntry/Radio',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitRadio>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const Basic: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <div style={{display: 'flex', gap: '10px'}}>
                <KitRadio>Unchecked</KitRadio>
                <KitRadio defaultChecked>Checked</KitRadio>
            </div>
            <div style={{display: 'flex', gap: '10px'}}>
                <KitRadio disabled>Disabled Unchecked</KitRadio>
                <KitRadio defaultChecked disabled>
                    Disabled Checked
                </KitRadio>
            </div>
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Danger: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <KitRadio danger>Unchecked</KitRadio>
            <KitRadio danger defaultChecked>
                Checked
            </KitRadio>
            <KitRadio danger disabled>
                Disabled Unchecked
            </KitRadio>
            <KitRadio danger defaultChecked disabled>
                Disabled Checked
            </KitRadio>
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Group: Story = {
    render: () => (
        <KitRadio.Group>
            <KitRadio value={1}>A</KitRadio>
            <KitRadio value={2}>B</KitRadio>
            <KitRadio value={3}>C</KitRadio>
            <KitRadio value={4}>D</KitRadio>
        </KitRadio.Group>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
