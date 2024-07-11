import type {Meta, StoryObj} from '@storybook/react';
import {KitInput} from '@kit/DataEntry';
import {argTypes} from './data';
import React from 'react';
import {Template} from './Template';
import {BasicInputTest} from './test-components/BasicInputTest.tsx';
import {PasswordInputTest} from './test-components/PasswordInputTest.tsx';
import {TextAreaInputTest} from './test-components/TextAreaInputTest.tsx';
import {CountingInputTest} from './test-components/CountingInputTest.tsx';
import {PrefixAndSuffixInputTest} from './test-components/PrefixAndSuffixInputTest.tsx';
import {LabelAndHelperInputTest} from './test-components/LabelAndHelperInputTest.tsx';
import {ReadonlyTest} from './test-components/ReadonlyTest.tsx';

const meta: Meta<typeof KitInput> = {
    component: KitInput,
    title: 'Design System/DataEntry/Input',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitInput>;

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
                <BasicInputTest />
                <PasswordInputTest />
                <TextAreaInputTest />
                <CountingInputTest />
                <PrefixAndSuffixInputTest />
                <ReadonlyTest />
            </div>
            <LabelAndHelperInputTest />
        </div>
    )
};
