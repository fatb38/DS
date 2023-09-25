import type {Meta, StoryObj} from '@storybook/react';
import {KitItemList} from '@kit/DataDisplay';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitItemList> = {
    component: KitItemList,
    title: 'Design System/DataDisplay/ItemList',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitItemList>;

export const Api: Story = {
    render: Template
};
