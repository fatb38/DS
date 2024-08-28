import type {Meta, StoryObj} from '@storybook/react';
import {KitGrid} from '@kit/Layout';
import {argTypes} from './data';
import {Template, FakeGrid} from './Template';
import GridTest from './test-components/gridTest';

const meta: Meta<typeof FakeGrid> = {
    component: FakeGrid,
    title: 'Design System/Layout/Grid',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitGrid>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => <GridTest />
};
