import type {Meta, StoryObj} from '@storybook/react';
import {KitDropDown} from '@kit/Navigation';
import {argTypes} from './data';
import React from 'react';
import {Template} from './Template';
import {BasicDropdownTest} from './test-components/BasicDropdownTest.tsx';
import {ArrowAndPlacementTest} from './test-components/ArrowAndPlacementTest.tsx';
import {KitDivider} from '@kit/Layout';
import {GroupAndDisabledDropdownTest} from './test-components/GroupAndDisabledDropdownTest.tsx';

const meta: Meta<typeof KitDropDown> = {
    component: KitDropDown,
    title: 'Design System/Navigation/DropDown',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitDropDown>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <div>
            <div style={{display: 'flex', gap: '100px'}}>
                <BasicDropdownTest />
                <GroupAndDisabledDropdownTest />
            </div>
            <div style={{marginBottom: '250px'}} />
            <KitDivider color="lightGrey" />
            <ArrowAndPlacementTest />
        </div>
    )
};
