import type {Meta, StoryObj} from '@storybook/react';
import {KitTabs} from '@kit/DataDisplay';
import {KitDivider} from '@kit/Layout';
import React from 'react';
import {argTypes} from './data';
import {Template} from './Template';
import {BasicTabsTest} from './test-componnents/BasicTabsTest.tsx';
import {ExtraContentTabsTest} from './test-componnents/ExtraContentTabsTest.tsx';
import {PositionTabsTest} from './test-componnents/PositionTabsTest.tsx';
import {SizeTabsTest} from './test-componnents/SizeTabsTest.tsx';

const meta: Meta<typeof KitTabs> = {
    component: KitTabs,
    title: 'Design System/DataDisplay/Tabs',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitTabs>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <>
            <div style={{display: 'flex', gap: '50px'}}>
                <div>
                    <BasicTabsTest />
                    <KitDivider />
                    <PositionTabsTest />
                </div>
                <div>
                    <SizeTabsTest />
                    <KitDivider />
                    <ExtraContentTabsTest />
                </div>
            </div>
        </>
    )
};
