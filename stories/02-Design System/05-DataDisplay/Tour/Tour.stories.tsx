import type {Meta, StoryObj} from '@storybook/react';
import {KitTour} from '@kit/DataDisplay';
import {argTypes} from './data';
import {Template} from './Template';

const meta: Meta<typeof KitTour> = {
    component: KitTour,
    title: 'Design System/DataDisplay/Tour',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitTour>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};
