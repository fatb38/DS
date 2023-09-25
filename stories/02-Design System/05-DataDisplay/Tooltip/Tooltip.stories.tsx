import type {Meta, StoryObj} from '@storybook/react';
import {KitTooltip} from '@kit/DataDisplay';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitTooltip> = {
    component: KitTooltip,
    title: 'Design System/DataDisplay/Tooltip',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitTooltip>;

export const Api: Story = {
    render: Template
};
