import type {Meta, StoryObj} from '@storybook/react';
import {KitColorPicker} from '@kit/DataEntry';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitColorPicker> = {
    component: KitColorPicker,
    title: 'Design System/DataEntry/ColorPicker',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitColorPicker>;

export const Api: Story = {
    render: Template
};
