import type {Meta, StoryObj} from '@storybook/react';
import {argTypes} from './data';
import {KitPageLayout} from '@kit/Layout/PageLayout';
import {BasicPageLayoutTest, PageLayoutWithSideMenuTest} from './test-components';

const meta: Meta<typeof KitPageLayout> = {
    component: KitPageLayout,
    title: 'Design System/Layout/PageLayout',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitPageLayout>;

export const Api: Story = {
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
            <BasicPageLayoutTest />
            <PageLayoutWithSideMenuTest />
        </div>
    )
};
