import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import {Template} from './Template';
import {argTypes} from './data';
import {KitError} from '@kit/DataDisplay';
import {KitDivider} from '@kit/Layout';
import {ResponsiveErrorTest} from './test-components/ResponsiveErrorTest.tsx';
import {BasicErrorTest} from './test-components/BasicErrorTest.tsx';

const meta: Meta<typeof KitError> = {
    component: KitError,
    title: 'Design System/DataDisplay/Error',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitError>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px'}}>
            <BasicErrorTest />
            <KitDivider />
            <ResponsiveErrorTest />
        </div>
    )
};
