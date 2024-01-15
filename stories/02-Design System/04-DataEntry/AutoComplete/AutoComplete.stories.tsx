import type {Meta, StoryObj} from '@storybook/react';
import {KitAutoComplete} from '@kit/DataEntry';
import {argTypes} from './data';
import React from 'react';
import {Template} from './Template';
import {BasicAutocompleteTest} from './test-components/BasicAutocompleteTest.tsx';
import {LabelAndHelperAutocompleteTest} from './test-components/LabelAndHelperAutocompleteTest.tsx';

const meta: Meta<typeof KitAutoComplete> = {
    component: KitAutoComplete,
    title: 'Design System/DataEntry/AutoComplete',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitAutoComplete>;

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
                <BasicAutocompleteTest />
                <LabelAndHelperAutocompleteTest />
            </div>
        </>
    )
};
