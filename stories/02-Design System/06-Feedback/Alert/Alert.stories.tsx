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
    render: Template
};
