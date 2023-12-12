import type {Meta, StoryObj} from '@storybook/react';
import {KitInputNumber} from '@kit/DataEntry';
import {argTypes, Template} from './data';
import React from 'react';
import {within} from '@storybook/testing-library';

const meta: Meta<typeof KitInputNumber> = {
    component: KitInputNumber,
    title: 'Design System/DataEntry/InputNumber',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitInputNumber>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const Basic: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '10px'}}>
            <KitInputNumber min={1} max={10} placeholder="1" data-testid="focus" />
            <KitInputNumber min={1} max={10} placeholder="1" />
            <KitInputNumber min={1} max={10} placeholder="1" disabled />
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

export const LabelHelperStatus: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <KitInputNumber placeholder="2" helper="Helper" label="Label" />
            <KitInputNumber prefix="￥" placeholder="2" helper="Helper" label="Label" />
            <KitInputNumber prefix="￥" placeholder="2" helper="Helper" label="Label" disabled />
            <KitInputNumber prefix="￥" placeholder="2" helper="Helper" label="Label" status="warning" />
            <KitInputNumber
                prefix="￥"
                placeholder="2"
                helper="Helper"
                label="Label"
                status="warning"
                data-testid="focus"
            />
            <KitInputNumber prefix="￥" placeholder="2" helper="Helper" label="Label" status="error" />
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
