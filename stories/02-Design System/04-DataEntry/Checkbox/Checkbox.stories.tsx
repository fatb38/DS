import type {Meta, StoryObj} from '@storybook/react';
import {KitCheckbox} from '@kit/DataEntry';
import {argTypes} from './data';
import React from 'react';
import {Template} from './Template';
import {BasicCheckboxTest} from './test-components/BasicCheckboxTest.tsx';
import {DangerCheckboxTest} from './test-components/DangerCheckboxTest.tsx';
import {GroupCheckboxTest} from './test-components/GroupCheckboxTest.tsx';
import {KitDivider} from '@kit/Layout';

const meta: Meta<typeof KitCheckbox> = {
    component: KitCheckbox,
    title: 'Design System/DataEntry/Checkbox',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitCheckbox>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <>
            <BasicCheckboxTest />
            <KitDivider />
            <GroupCheckboxTest />
        </>
    )
};

export const ChromaticDangerTest: Story = {
    render: () => (
        <DangerCheckboxTest />
    )
}
