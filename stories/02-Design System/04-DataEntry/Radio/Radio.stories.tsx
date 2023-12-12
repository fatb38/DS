import type {Meta, StoryObj} from '@storybook/react';
import {KitRadio} from '@kit/DataEntry';
import {argTypes, Template} from './data';
import React from 'react';
import {within} from '@storybook/testing-library';

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
                <KitRadio defaultChecked data-testid="focus">
                    Checked
                </KitRadio>
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
    play: ({canvasElement}) => {
        const canvas = within(canvasElement);
        const radio = canvas.getByTestId('focus');
        radio.focus();
    },
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
            <KitRadio danger defaultChecked data-testid="focus">
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
    play: ({canvasElement}) => {
        const canvas = within(canvasElement);
        const radio = canvas.getByTestId('focus');
        radio.focus();
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Group: Story = {
    render: () => (
        <KitRadio.Group>
            <KitRadio value={1}>A</KitRadio>
            <KitRadio value={2}>B</KitRadio>
            <KitRadio value={3} data-testid="focus">
                C
            </KitRadio>
            <KitRadio value={4}>D</KitRadio>
        </KitRadio.Group>
    ),
    play: ({canvasElement}) => {
        const canvas = within(canvasElement);
        const radio = canvas.getByTestId('focus');
        radio.focus();
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
