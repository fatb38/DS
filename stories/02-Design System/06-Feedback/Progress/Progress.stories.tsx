import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {KitProgress} from '@kit/Feedback';
import {Template} from './Template';
import {argTypes} from './data';
import {LinearProgressTest} from './test-components/LinearProgressTest.tsx';
import {CircularProgressTest} from './test-components/CircularProgressTest.tsx';
import {StepsProgressTest} from './test-components/StepsProgressTest.tsx';

const meta: Meta<typeof KitProgress> = {
    component: KitProgress,
    title: 'Design System/Feedback/Progress',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitProgress>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <>
            <LinearProgressTest />
            <CircularProgressTest />
            <StepsProgressTest />
        </>
    )
};
