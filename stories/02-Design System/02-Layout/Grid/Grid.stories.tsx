import type {Meta, StoryObj} from '@storybook/react';
import {KitGrid} from '@kit/Layout';
import {argTypes} from './data';
import {LgGridTest, MdGridTest, SmGridTest, XlGridTest, XsGridTest, XxlGridTest} from './test-components';

const {KitRow} = KitGrid;

const meta: Meta<typeof KitRow> = {
    component: KitRow,
    title: 'Design System/Layout/Grid',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitGrid>;

export const Api: Story = {
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            <XsGridTest />
            <SmGridTest />
            <MdGridTest />
            <LgGridTest />
            <XlGridTest />
            <XxlGridTest />
        </div>
    )
};
