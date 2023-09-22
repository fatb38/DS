import type {Meta, StoryObj} from '@storybook/react';
import {KitSwitch} from '@kit/DataEntry';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitSwitch> = {
    component: KitSwitch,
    title: 'Design System/DataEntry/Switch',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitSwitch>;

export const Api: Story = {
    render: Template
};
