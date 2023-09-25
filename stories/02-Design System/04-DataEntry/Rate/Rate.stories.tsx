import type {Meta, StoryObj} from '@storybook/react';
import {KitRate} from '@kit/DataEntry';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitRate> = {
    component: KitRate,
    title: 'Design System/DataEntry/Rate',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitRate>;

export const Api: Story = {
    render: Template
};
