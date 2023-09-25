import type {Meta, StoryObj} from '@storybook/react';
import {KitProgress} from '@kit/Feedback';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitProgress> = {
    component: KitProgress,
    title: 'Design System/Feedback/Progress',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitProgress>;

export const Api: Story = {
    render: Template
};
