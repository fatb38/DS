import type {Meta, StoryObj} from '@storybook/react';
import {KitSwitch} from '@kit/DataEntry';
import {argTypes, Template} from './data';
import React from 'react';
import {within} from '@storybook/testing-library';

const meta: Meta<typeof KitSwitch> = {
    component: KitSwitch,
    title: 'Design System/DataEntry/Switch',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitSwitch>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const Basic: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <div style={{display: 'flex', gap: '20px'}}>
                <KitSwitch data-testid="focus" />
                <KitSwitch />
                <KitSwitch defaultChecked />
            </div>
            <div style={{display: 'flex', gap: '20px'}}>
                <KitSwitch loading />
                <KitSwitch defaultChecked loading />
            </div>
            <div style={{display: 'flex', gap: '20px'}}>
                <KitSwitch disabled />
                <KitSwitch defaultChecked disabled />
            </div>
        </div>
    ),
    play: ({canvasElement}) => {
        const canvas = within(canvasElement);
        const inputNumber = canvas.getByTestId('focus');
        inputNumber.focus();
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
