import type {Meta, StoryObj} from '@storybook/react';
import {KitCheckbox} from '@kit/DataEntry';
import {argTypes, Template} from './data';
import {within} from '@storybook/testing-library';
import React from 'react';

const meta: Meta<typeof KitCheckbox> = {
    component: KitCheckbox,
    title: 'Design System/DataEntry/Checkbox',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitCheckbox>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const Basic: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <div style={{display: 'flex', gap: '10px'}}>
                <KitCheckbox data-testid="focus" checked={true}>
                    Checked
                </KitCheckbox>
                <KitCheckbox checked={true}>Checked</KitCheckbox>
                <KitCheckbox checked={true} disabled>
                    Disabled checked
                </KitCheckbox>
                <KitCheckbox indeterminate>Disabled Indeterminate</KitCheckbox>
            </div>
            <div style={{display: 'flex', gap: '10px'}}>
                <KitCheckbox>Unchecked</KitCheckbox>
                <KitCheckbox disabled>Disabled Unchecked</KitCheckbox>
                <KitCheckbox indeterminate disabled>
                    Disabled Indeterminate
                </KitCheckbox>
            </div>
        </div>
    ),
    play: ({canvasElement}) => {
        const canvas = within(canvasElement);
        const checkbox = canvas.getByTestId('focus');
        checkbox.focus();
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Danger: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <KitCheckbox defaultChecked={false} danger>
                Unchecked
            </KitCheckbox>
            <KitCheckbox indeterminate danger>
                Indeterminate
            </KitCheckbox>
            <KitCheckbox defaultChecked danger>
                Checked
            </KitCheckbox>
            <KitCheckbox defaultChecked danger data-testid="focus">
                Checked
            </KitCheckbox>
            <KitCheckbox defaultChecked disabled danger>
                Disabled
            </KitCheckbox>
        </div>
    ),
    play: ({canvasElement}) => {
        const canvas = within(canvasElement);
        const checkbox = canvas.getByTestId('focus');
        checkbox.focus();
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Group: Story = {
    render: () => {
        const plainOptions = ['Apple', 'Pear', 'Orange'];
        return <KitCheckbox.Group options={plainOptions} defaultValue={['Apple']} />;
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
