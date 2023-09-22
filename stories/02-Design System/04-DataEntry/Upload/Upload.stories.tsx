import type {Meta, StoryObj} from '@storybook/react';
import {KitUpload} from '@kit/DataEntry';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitUpload> = {
    component: KitUpload,
    title: 'Design System/DataEntry/Upload',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitUpload>;

export const Api: Story = {
    render: Template
};
