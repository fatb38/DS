import type {Meta, StoryObj} from '@storybook/react';
import {Template} from './Template';
import {argTypes} from './data';
import {KitItemCard} from '@kit/DataDisplay';
import {ItemCardTest} from './test-components/ItemCardTest';

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

export const ChromaticTest: Story = {
    render: () => <ItemCardTest />
};
