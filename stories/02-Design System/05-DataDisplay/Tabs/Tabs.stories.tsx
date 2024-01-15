import type {Meta, StoryObj} from '@storybook/react';
import {KitTabs} from '@kit/DataDisplay';
import {argTypes} from './data';
import React from 'react';
import {Template} from './Template';
import {BasicTabsTest} from './test-componnents/BasicTabsTest.tsx';
import {SizeTabsTest} from './test-componnents/SizeTabsTest.tsx';
import {PositionTabsTest} from './test-componnents/PositionTabsTest.tsx';
import {KitDivider} from '@kit/Layout';

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
                    <KitDivider color="lightGrey" />
                    <PositionTabsTest />
                </div>
                <SizeTabsTest />
            </div>
        </>
    )
};
