import type {Meta, StoryObj} from '@storybook/react';
import {KitCollapse} from '@kit/DataDisplay';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitCollapse> = {
    component: KitCollapse,
    title: 'Design System/DataDisplay/Collapse',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitCollapse>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};
