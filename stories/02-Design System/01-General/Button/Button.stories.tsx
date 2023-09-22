import type {Meta, StoryObj} from '@storybook/react';
import {KitButton} from '@kit/General/';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitButton> = {
    component: KitButton,
    title: 'Design System/General/Button',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitButton>;

export const Api: Story = {
    render: Template
};
