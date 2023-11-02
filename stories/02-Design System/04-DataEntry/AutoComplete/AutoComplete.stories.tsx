import type {Meta, StoryObj} from '@storybook/react';
import {KitAutoComplete} from '@kit/DataEntry';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitAutoComplete> = {
    component: KitAutoComplete,
    title: 'Design System/DataEntry/AutoComplete',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitAutoComplete>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};
