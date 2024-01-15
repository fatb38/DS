import type {Meta, StoryObj} from '@storybook/react';
import {KitSteps} from '@kit/Navigation';
import {argTypes} from './data';
import React from 'react';
import {Template} from './Template';
import {BasicStepsTest} from './test-components/BasicStepsTest.tsx';
import {KitDivider} from '@kit/Layout';
import {ClickableStepsTest} from './test-components/ClickableStepsTest.tsx';

const meta: Meta<typeof KitSteps> = {
    component: KitSteps,
    title: 'Design System/Navigation/Steps',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitSteps>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <>
            <BasicStepsTest />
            <KitDivider />
            <ClickableStepsTest />
        </>
    )
};
