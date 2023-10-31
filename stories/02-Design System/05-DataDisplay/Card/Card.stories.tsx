import type {Meta, StoryObj} from '@storybook/react';
import {argTypes, Template} from './data';
import {KitCard} from '@kit/DataDisplay';

const meta: Meta<typeof KitCard> = {
    component: KitCard,
    title: 'Design System/DataDisplay/Card',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitCard>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};
