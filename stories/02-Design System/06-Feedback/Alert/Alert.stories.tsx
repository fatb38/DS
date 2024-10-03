import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {KitAlert} from '@kit/Feedback';
import {Template} from './Template';
import {argTypes} from './data';
import {BasicAlertTest} from './test-components/BasicAlertTest.tsx';
import {DescriptionAlertTest} from './test-components/DescriptionAlertTest.tsx';
import {FullAlertTest} from './test-components/FullAlertTest.tsx';
import {ToastedAlertTest} from './test-components/ToastedAlertTest.tsx';

const meta: Meta<typeof KitAlert> = {
    component: KitAlert,
    title: 'Design System/Feedback/Alert',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitAlert>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <BasicAlertTest />
            <DescriptionAlertTest />
            <FullAlertTest />
            <ToastedAlertTest />
        </div>
    )
};
