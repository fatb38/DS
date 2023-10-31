import type {Meta, StoryObj} from '@storybook/react';
import {KitItemCard} from '@kit/DataDisplay';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitItemCard> = {
    component: KitItemCard,
    title: 'Design System/DataDisplay/ItemCard',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitItemCard>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};
