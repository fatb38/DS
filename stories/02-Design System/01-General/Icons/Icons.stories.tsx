import type {Meta, StoryObj} from '@storybook/react';
import {KitIcon} from '@kit/General/';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitIcon> = {
    component: KitIcon,
    title: 'Design System/General/Icons',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitIcon>;

export const Api: Story = {
    render: Template
};
