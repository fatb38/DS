import type {Meta, StoryObj} from '@storybook/react';
import {KitDivider} from '@kit/Layout';
import {argTypes} from './data';
import {Template} from './Template';

const meta: Meta<typeof KitDivider> = {
    component: KitDivider,
    title: 'Design System/Layout/Divider',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitDivider>;

export const Api: Story = {
    render: Template
};
