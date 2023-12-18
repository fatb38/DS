import type {Meta, StoryObj} from '@storybook/react';
import {KitComponent, Template} from './Template';
import {argTypes} from './data';

const meta: Meta<typeof KitComponent> = {
    component: KitComponent,
    title: 'Design System/DataEntry/Template',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitComponent>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};
