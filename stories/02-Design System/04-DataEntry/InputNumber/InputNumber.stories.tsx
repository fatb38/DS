import type {Meta, StoryObj} from '@storybook/react';
import {KitInputNumber} from '@kit/DataEntry';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitInputNumber> = {
    component: KitInputNumber,
    title: 'Design System/DataEntry/InputNumber',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitInputNumber>;

export const Api: Story = {
    render: Template
};
