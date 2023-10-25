import type {Meta, StoryObj} from '@storybook/react';
import {KitComponent} from './data';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitComponent> = {
    component: KitComponent,
    title: 'Design System/DataEntry/Template',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitComponent>;

export const Api: Story = {
    render: Template
};
