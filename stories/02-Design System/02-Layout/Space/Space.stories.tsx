import type {Meta, StoryObj} from '@storybook/react';
import {KitSpace} from '@kit/Layout';
import {argTypes} from './data';
import {Template} from './Template';

const meta: Meta<typeof KitSpace> = {
    component: KitSpace,
    title: 'Design System/Layout/Space',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitSpace>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};
