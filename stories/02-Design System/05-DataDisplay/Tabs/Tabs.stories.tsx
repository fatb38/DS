import type {Meta, StoryObj} from '@storybook/react';
import {KitTabs} from '@kit/DataDisplay';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitTabs> = {
    component: KitTabs,
    title: 'Design System/DataDisplay/Tabs',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitTabs>;

export const Api: Story = {
    render: Template
};
