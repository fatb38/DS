import type {Meta, StoryObj} from '@storybook/react';
import {KitSteps} from '@kit/Navigation';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitSteps> = {
    component: KitSteps,
    title: 'Design System/Navigation/Steps',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitSteps>;

export const Api: Story = {
    render: Template
};
