import type {Meta, StoryObj} from '@storybook/react';
import {KitTag} from '@kit/DataEntry';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitTag> = {
    component: KitTag,
    title: 'Design System/DataDisplay/Tag',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitTag>;

export const Api: Story = {
    render: Template
};
