import type {Meta, StoryObj} from '@storybook/react';
import {KitIcon} from '@kit/General/';
import {argTypes} from './data';
import {Template} from './Template';
import {IconsTest} from './test-components/IconsTest.tsx';

const meta: Meta<typeof KitIcon> = {
    component: KitIcon,
    title: 'Design System/General/Icons',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitIcon>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => <IconsTest />
};
