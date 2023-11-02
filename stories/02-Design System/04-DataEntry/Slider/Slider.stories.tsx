import type {Meta, StoryObj} from '@storybook/react';
import {KitSlider} from '@kit/DataEntry';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitSlider> = {
    component: KitSlider,
    title: 'Design System/DataEntry/Slider',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitSlider>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};
