import type {Meta, StoryObj} from '@storybook/react';
import {argTypes} from './data';
import React from 'react';
import {Template} from './Template';
import {BasicInputWrapperTest} from './test-components/BasicInputWrapperTest';
import {BorderInputWrapperTest} from './test-components/BorderInputWrapperTest';
import {StatusInputWrapperTest} from './test-components/StatusInputWrapperTest';
import {DisabledInputWrapperTest} from './test-components/DisabledInputWrapperTest';
import {RequiredInputWrapperTest} from './test-components/RequiredInputWrapperTest';
import {InfosInputWrapperTest} from './test-components/InfosInputWrapperTest';
import {ActionsInputWrapperTest} from './test-components/ActionsInputWrapperTest';
import KitInputWrapper from '@kit/DataEntry/InputWrapper/InputWrapper.tsx';

const meta: Meta<typeof KitInputWrapper> = {
    component: KitInputWrapper,
    title: 'Design System/DataEntry/InputWrapper',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitInputWrapper>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <div style={{display: 'flex'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <BasicInputWrapperTest />
                <BorderInputWrapperTest />
                <StatusInputWrapperTest />
                <DisabledInputWrapperTest />
                <RequiredInputWrapperTest />
                <InfosInputWrapperTest />
                <ActionsInputWrapperTest />
            </div>
        </div>
    )
};
