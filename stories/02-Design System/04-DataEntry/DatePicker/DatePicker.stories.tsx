import type {Meta, StoryObj} from '@storybook/react';
import {KitDatePicker} from '@kit/DataEntry';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitDatePicker> = {
    component: KitDatePicker,
    title: 'Design System/DataEntry/DatePicker',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitDatePicker>;

export const Api: Story = {
    render: Template
};
